using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models;

public class PatientModel
{
    public int PatientId { get; set; }

    
    public string? FirstName { get; set; }

   
    public string? LastName { get; set; }

   
    public int? Age { get; set; }

    
    public string? Gender { get; set; }

   
    public string? Dob { get; set; }

    
    public string? Phone { get; set; }
}

