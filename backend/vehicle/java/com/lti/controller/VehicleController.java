package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.Vehicle;
import com.lti.service.VehicleService;

@RestController
@CrossOrigin("http://localhost:4200")
public class VehicleController {
	
	@Autowired
	VehicleService vService;
	
	@GetMapping("/vehicle")
	public List<Vehicle>getVehicles()
	{
		return vService.getVehicles();
		
	}
	@PostMapping("/vehicle")
	public boolean addVehicle(@RequestBody Vehicle vehicle)
	{
		return vService.addVehicle(vehicle);
	}
	

}