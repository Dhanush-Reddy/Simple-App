using DataEntites.Entities;
using AppContext = DataEntites.Entities.AppContext;

namespace DataEntites;

public class PatientEntity : I_PatientEntity
{
    private readonly AppContext app;
    public PatientEntity(AppContext _app)
    {
        app = _app;
    }


    public Patient AddPatient(Patient patient)
    {
        app.Patients.Add(patient);
        app.SaveChanges();
        return patient;
    }

    public Patient DeletePatient(int id)
    {
        var pa = app.Patients.Where(p => p.PatientId == id).FirstOrDefault();
        app.Patients.Remove(pa);
        app.SaveChanges();
        return pa;

    }

    public List<Patient> GetAllPatient()
    {
        var pa = (from p in app.Patients where p.FirstName != null orderby p.FirstName select p).ToList();
        return pa;
    }

    public Patient UpdatePatient(Patient patient)
    {
        app.Patients.Update(patient);
        app.SaveChanges();
        return patient;
    }
}

