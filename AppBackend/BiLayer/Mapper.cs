
using DataEntites.Entities;

namespace BiLayer;

public class Mapper
{
    public static Models.PatientModel map(Patient patient)
    {
        return new Models.PatientModel()
        {
            PatientId = patient.PatientId,
            FirstName = patient.FirstName,
            LastName = patient.LastName,
            Age = patient.Age,
            Gender = patient.Gender,
            Dob = patient.Dob,
            Phone = patient.Phone

        };
    }


    public static Patient map(Models.PatientModel patient)
    {
        return new Patient()
        {
            PatientId = patient.PatientId,
            FirstName = patient.FirstName,
            LastName = patient.LastName,
            Age = patient.Age,
            Gender=patient.Gender,
            Dob = patient.Dob,
            Phone = patient.Phone
        };
    }

    public static IEnumerable<Models.PatientModel> map(IEnumerable<Patient> patients)
    {
        return patients.Select(map).ToList();
    }
}

