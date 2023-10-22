using System;
using Models;
namespace BiLayer
{
	public interface I_Logic
	{
		PatientModel AddPatient(PatientModel patient);
		IEnumerable<PatientModel> getAll();
		PatientModel UpdatePatient(int id, PatientModel patient);
		PatientModel deletePatient(int id);
		PatientModel GetById(int id);
	}
}

