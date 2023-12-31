﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BiLayer;
using Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppBAckend.Controllers
{
    [Route("api/[controller]")]
    public class AppController : Controller
    {

        private readonly I_Logic logic;

        public AppController(I_Logic _logic)
        {
            logic = _logic;
        }

        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            var pa = logic.getAll();
            return Ok(pa);
        }
        [HttpGet("GetById/{id}")]
        public IActionResult Get([FromRoute] int id)
        {
            var pa = logic.GetById(id);
            return Ok(pa);
        }
        [HttpPost("AddPatient")]
        public IActionResult post([FromBody]PatientModel patient)
        {
            var pa = logic.AddPatient(patient);
            return Ok(pa);
        }
        [HttpDelete("DeletePatient/{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var pa = logic.deletePatient(id);
            return Ok(pa);
        }
        [HttpPut("UpdatePateint/{id}")]
        public IActionResult Update([FromRoute]int id, [FromBody] PatientModel patient)
        {
            logic.UpdatePatient(id, patient);
            return Ok(patient);
        }


       
       
    }
}

