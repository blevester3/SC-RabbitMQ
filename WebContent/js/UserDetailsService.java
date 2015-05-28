package com.homedepot.ta.aa.sia.service;

import java.sql.SQLException;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import org.apache.catalina.realm.GenericPrincipal;

import com.homedepot.ta.aa.catalina.realm.Profile;
import com.homedepot.ta.aa.dao.exceptions.QueryException;
import com.homedepot.ta.aa.sia.service.dao.UserDAO;
import com.homedepot.ta.aa.sia.service.dto.User;
import com.homedepot.ta.aa.sia.service.dto.UserDetailsResponse;

@Path("userDetails")
public class UserDetailsService 
{
	/**
	 * Get details about the user currently logged in
	 * 
	 * @return user details
	 * 
	 * @throws ValidationException if the objects required to get the user details are missing
	 * @throws SQLException if an exception occurs getting user details from the data store
	 */
	
	/* ldap properties */
	private static final String LDAP_PROP_FIRST_NAME = "givenName";
	private static final String LDAP_PROP_LAST_NAME = "sn";
	private static final String LDAP_PROP_MAIL = "mail";
	
	/* version constants */
	protected static final int VERSION1 = 1;
	/* security context */
	@Context SecurityContext mSecurityContext;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUserDetails() throws SQLException
	{
		UserDetailsResponse response = new UserDetailsResponse();

		response.setIsManager(false);
		// get the user
		User user = getUser();
		// populate the response
		response.setUserId(user.getId());
		response.setFullName(user.getFullNm());
		response.setRoles(user.getRoles());
		response.setEmail(user.getEmailAddr());

		return Response.status(response.getStatus()).entity(response).build();
	} // end function getUserDetails()
	
	@GET
	@Path("/logout")
	@Produces(MediaType.APPLICATION_JSON)
	public Response logout(@Context HttpServletRequest request) throws SQLException
	{
		
		request.getSession().invalidate();
		UserDetailsResponse response = new UserDetailsResponse();
		// populate the response
		response.setIsManager(false);
		response.setUserId(null);
		response.setFullName(null);
		response.setRoles(null);

		return Response.status(response.getStatus()).entity(response).build();
	} // end function getUserDetails()
	
	private User getUser() throws SQLException
	{
		
		// create a new user object
		User user = new User();
		// set the user id
		user.setId(mSecurityContext.getUserPrincipal().getName());
		
		// set the user groups
		for(String role : (((GenericPrincipal)mSecurityContext.getUserPrincipal()).getRoles()))
		{
			// add the role to the user
			user.addRole(role);
		} // end for(String role : (((GenericPrincipal)mSecurityContext.getUserPrincipal()).getRoles()))

		// get the user profile
		Profile profile = Profile.getCurrent();
		
		// if the profile is not null and the profile contains properties
		if(profile != null && profile.getProperties() != null && profile.getProperties().size() > 0)
		{
			// set the first and last name
			user.setFirstNm(profile.getProperty(Profile.FIRST_NAME));
			user.setLastNm(profile.getProperty(Profile.LAST_NAME));
			// set the user email address
			user.setEmailAddr(profile.getProperty(Profile.EMAIL));
		} // end if(profile != null && profile.getProperties() != null && profile.getProperties().size() > 0)
		else
		{
			try
			{
				// use the user id to query for the user information
				HashMap<String, String> ldapData = UserDAO.readUserInformation(user.getId());
				// use the ldap data to set the first and last name
				user.setFirstNm(ldapData.get(LDAP_PROP_FIRST_NAME));
				user.setLastNm(ldapData.get(LDAP_PROP_LAST_NAME));
				// set the user email address
				user.setEmailAddr(ldapData.get(LDAP_PROP_MAIL));
			} // end try
			catch(QueryException qe)
			{
				throw new SQLException("An exception occurred getting user information from ldap", (qe.getCause() == null ? qe : qe.getCause()));
			} // end catch
		} // end else
		
		return user;
	} // end function getUser()
} // end class UserDetailsService