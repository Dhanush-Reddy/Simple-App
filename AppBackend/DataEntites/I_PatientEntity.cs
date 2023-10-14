using System;
using DataEntites.Entities;
namespace DataEntites
{
	public interface I_PatientEntity
	{
        Patient AddPatient(Patient patient);
        Patient UpdatePatient(Patient patient);
        Patient DeletePatient(int id);
        List<Patient> GetAllPatient();
    }
}

