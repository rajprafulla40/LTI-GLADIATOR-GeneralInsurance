package com.lti.dao;

import java.util.List;

import com.lti.model.Vehicle;


public interface VehicleDAO
{
		public boolean addVehicle(Vehicle vehicle);
		public List<Vehicle> getVehicles();
}