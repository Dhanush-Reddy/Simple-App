using System;
using Models;
using DataEntites;

namespace BiLayer
{
	public class Logic : I_Logic
	{
        private readonly I_PatientEntity context;
		public Logic(I_PatientEntity _context)
		{
            context = _context;
		}

        public PatientModel AddPatient(PatientModel patient)
        {
            return Mapper.map(context.AddPatient(Mapper.map(patient)));
        }

        public PatientModel deletePatient(int id)
        {
            var pa = context.DeletePatient(id);
            return Mapper.map(pa);
        }

        public IEnumerable<PatientModel> getAll()
        {
            return Mapper.map(context.GetAllPatient());
        }

        public PatientModel GetById(int id)
        {
            var p = (from pa in context.GetAllPatient() where pa.PatientId == id select pa).FirstOrDefault();
            return Mapper.map(p);
        }

        public PatientModel UpdatePatient(int id, PatientModel patient)
        {
            var p = (from pa in context.GetAllPatient() where pa.PatientId == id select pa).FirstOrDefault();
            if (p != null)
            {
                p.FirstName = patient.FirstName;
                p.LastName = patient.LastName;
                p.Age = patient.Age;
                p.Gender = patient.Gender;
                p.Dob = patient.Dob;
                p.Phone = patient.Phone;

                p = context.UpdatePatient(p);

            }
            return Mapper.map(p);
        }
    }
}

