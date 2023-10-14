using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace DataEntites.Entities;

[Table("patient")]
public partial class Patient
{
    [Key]
    public int PatientId { get; set; }

    [Column("firstName")]
    [StringLength(100)]
    [Unicode(false)]
    public string? FirstName { get; set; }

    [Column("lastName")]
    [StringLength(100)]
    [Unicode(false)]
    public string? LastName { get; set; }

    [Column("age")]
    public int? Age { get; set; }

    [Column("gender")]
    [StringLength(100)]
    [Unicode(false)]
    public string? Gender { get; set; }

    [Column("dob")]
    [StringLength(100)]
    [Unicode(false)]
    public string? Dob { get; set; }

    [Column("phone")]
    [StringLength(1000)]
    [Unicode(false)]
    public string? Phone { get; set; }
}
