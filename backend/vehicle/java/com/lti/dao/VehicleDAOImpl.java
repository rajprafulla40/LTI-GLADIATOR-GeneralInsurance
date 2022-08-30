package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.lti.model.Vehicle;

@Repository
public class VehicleDAOImpl implements VehicleDAO

{
	@Autowired
	EntityManager eMan;

	@Override
	public boolean addVehicle(Vehicle vehicle) {
		eMan.persist(vehicle);
		return true;
	}

	@Override
	public List<Vehicle> getVehicles() {
		
		return eMan.createQuery("from Vehicle").getResultList();
	}
//	


}