using Microsoft.EntityFrameworkCore;
using DataEntites.Entities;
using BiLayer;
using Models;
using AppContext = DataEntites.Entities.AppContext;
using DataEntites;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var config = builder.Configuration.GetConnectionString("Connection");
builder.Services.AddDbContext<AppContext>(options => options.UseSqlServer(config));



builder.Services.AddScoped<I_PatientEntity, PatientEntity>();
builder.Services.AddScoped<I_Logic, Logic>();
















var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

