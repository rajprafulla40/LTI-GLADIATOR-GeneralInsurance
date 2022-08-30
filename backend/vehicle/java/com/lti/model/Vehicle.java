package com.lti.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Vehicle")
public class Vehicle
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="vehicleid")
	  private int vid;
    @Column(name="vehiclemodel")
     private String vmodel;
    @Column(name="vehicletype")
     private String type;
    @Column(name="manufacturedby")
     private String manufac;
    @Column(name="purchasedate")
    private String purchasedate;
    @Column(name="registrationnum")
    private String registrationnum;
    @Column(name="enginenum")
    private String enginenum;
    @Column(name="chassisnum")
    private String chassisnum;
    @Column(name="drivinglicensenum")
    private String drivinglicensenum;
    
	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	@Override
	public String toString() {
		return "Vehicle [vid=" + vid + ", vmodel=" + vmodel + ", type=" + type + ", manufac=" + manufac
				+ ", purchasedate=" + purchasedate + ", registrationnum=" + registrationnum + ", enginenum=" + enginenum
				+ ", chassisnum=" + chassisnum + ", drivinglicensenum=" + drivinglicensenum + "]";
	}


	public int getVid() {
		return vid;
	}

	public void setVid(int vid) {
		this.vid = vid;
	}

	public String getVmodel() {
		return vmodel;
	}

	public void setVmodel(String vmodel) {
		this.vmodel = vmodel;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getManufac() {
		return manufac;
	}

	public void setManufac(String manufac) {
		this.manufac = manufac;
	}

	public String getPurchasedate() {
		return purchasedate;
	}

	public void setPurchasedate(String purchasedate) {
		this.purchasedate = purchasedate;
	}

	public String getRegistrationnum() {
		return registrationnum;
	}

	public void setRegistrationnum(String registrationnum) {
		this.registrationnum = registrationnum;
	}

	public String getEnginenum() {
		return enginenum;
	}

	public void setEnginenum(String enginenum) {
		this.enginenum = enginenum;
	}

	public String getChassisnum() {
		return chassisnum;
	}

	public void setChassisnum(String chassisnum) {
		this.chassisnum = chassisnum;
	}

	public String getDrivinglicensenum() {
		return drivinglicensenum;
	}

	public void setDrivinglicensenum(String drivinglicensenum) {
		this.drivinglicensenum = drivinglicensenum;
	}

	public Vehicle(int vid, String vmodel, String type, String manufac, String purchasedate, String registrationnum,
			String enginenum, String chassisnum, String drivinglicensenum) {
		super();
		this.vid = vid;
		this.vmodel = vmodel;
		this.type = type;
		this.manufac = manufac;
		this.purchasedate = purchasedate;
		this.registrationnum = registrationnum;
		this.enginenum = enginenum;
		this.chassisnum = chassisnum;
		this.drivinglicensenum = drivinglicensenum;
	}
	
	
}
	