package com.lti.service;

import java.util.List;

import com.lti.model.Vehicle;



public interface VehicleService 
{

	public boolean addVehicle(Vehicle vehicle);
	public List<Vehicle> getVehicles();
}