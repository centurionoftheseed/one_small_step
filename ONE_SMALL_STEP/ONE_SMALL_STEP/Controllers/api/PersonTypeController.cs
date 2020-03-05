using AutoMapper;
using ONE_SMALL_STEP.Core;
using ONE_SMALL_STEP.Core.Domain;
using ONE_SMALL_STEP.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ONE_SMALL_STEP.Controllers.api
{
    [RoutePrefix("api")]
    public class PersonTypeController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly OneSmallStepContext _context;


        public PersonTypeController(IUnitOfWork unitOfWork, OneSmallStepContext context)
        {
            _unitOfWork = unitOfWork;
            _context = context;
        }





        // POST: Person/Edit/1

        [HttpGet]
        [Route("contacttype/{personTypeId}")]
        public EditPersonTypeViewModel Get(int personTypeId)
        {

            var entities = _unitOfWork.PersonType.SingleOrDefault(pt => pt.PersonTypeID == personTypeId);
            //var entities = _unitOfWork.Person.GetByID(p => p.PersonID == id, includeProperties: "PersonType");

            //entities = Mapper.Map<IEnumerable<Person>, IEnumerable<EditPersonViewModel>>(entities);
            //var PersonTypes = _context.PersonType.ToList();
            //var vm = Mapper.Map<Person, EditPersonViewModel>(entities);
            var vm = Mapper.Map<PersonType, EditPersonTypeViewModel>(entities);
            //vm.PersonTypes = PersonTypes;
            //vm.PersonTypes.ToList();


            return (vm);
        }





        // POST: api/EmployeesAPI
        //[ResponseType(typeof(Employee))]
        [HttpPost]
        [Route("contacttype/create")]
        //public IHttpActionResult PostMessageType(PersonType PersonType)
            public IHttpActionResult Post(PersonType PersonType)
        //public IHttpActionResult PostPerson(CreatePersonViewModel Person) >> need to switch to this<<<
        //public PersonViewModel PostPerson(Person Person)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //db.Employees.Add(employee);
            //db.SaveChanges();

            _unitOfWork.PersonType.Add(PersonType);
            _unitOfWork.Complete();

            //return Ok(Person);
            return Ok(PersonType.PersonTypeID);

            //return CreatedAtRoute("DefaultApi", new {id = Person.PersonID }, Person);
            //return Request.CreateResponse(HttpStatusCode.OK, 1);
            //if (result > 0)
            //{
            //    return Request.CreateResponse(HttpStatusCode.Created, "Submitted Successfully");
            //}
            //else
            //{
            //    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Something wrong !");
            //}
            //return CreatedAtRoute("DefaultApi", new { id = employee.EmpNo }, employee);
        }


        [HttpGet]
        [Route("contacttype")]
        public IEnumerable<PersonTypeViewModel> Get()

        {
            //return _repository.GetProfileForEdit(User.Identity.Name);
            var domainModel = _unitOfWork.PersonType.Get(null, x => x.OrderBy(z => z.PersonTypeName));

            //return _unitOfWork.Person.Get(null, x => x.OrderBy(z => z.LastName), includeProperties: "PersonType");

            //return View(courses.ToList());

            var vm = Mapper.Map<IEnumerable<PersonType>, IEnumerable<PersonTypeViewModel>>(domainModel);
            //var vm = Ok(Mapper.Map<IEnumerable<PersonViewModel>>(domainModel));
            //return (PersonViewModel)vm;
            return vm;

        }


        [HttpPut]
        [Route("contacttype/update")]
        //api/person/delete/" + personId,
        //public PersonViewModel Update(int personId, Person Person)
        public PersonTypeViewModel Update(PersonType PersonType)
        {
            //var domainModel = _unitOfWork.Person.Get(x => x.PersonID == personId).FirstOrDefault();

            //_unitOfWork.Person.Update(domainModel);
            _unitOfWork.PersonType.Update(PersonType);
            _unitOfWork.Complete();
            //var vm = Mapper.Map<Person, PersonViewModel>(domainModel);
            var vm = Mapper.Map<PersonType, PersonTypeViewModel>(PersonType);
            return vm;
        }



        [Route("contacttype/delete/{personTypeId}")]
        //api/person/delete/" + personId,
        public PersonTypeViewModel Delete(int personTypeId)
        {
            var domainModel = _unitOfWork.PersonType.Get(x => x.PersonTypeID == personTypeId).FirstOrDefault();

            _unitOfWork.PersonType.Remove(domainModel);
            _unitOfWork.Complete();
            var vm = Mapper.Map<PersonType, PersonTypeViewModel>(domainModel);
            return vm;
        }


    }
}
