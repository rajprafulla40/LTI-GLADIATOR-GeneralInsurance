package com.lti.repo;

import org.springframework.transaction.annotation.Transactional;

import com.lti.entity.Premium;

public interface EstimateRepository {

	void save(Premium premium);

	double estimateClaimAmount(Premium premium);

}