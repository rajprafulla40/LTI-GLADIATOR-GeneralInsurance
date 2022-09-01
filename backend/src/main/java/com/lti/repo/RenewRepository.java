package com.lti.repo;

import com.lti.entity.Customer;
import com.lti.entity.Policy;

public interface RenewRepository {

	void save(Object obj);

	Policy findByPolicyId(int id);

	boolean isPolicyPresent(int id);
	
	boolean isPolicyExpired(int id);
	
	public Customer findCustomerByPolicyId(int id);

}