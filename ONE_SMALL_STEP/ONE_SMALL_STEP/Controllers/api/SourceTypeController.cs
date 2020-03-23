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
    public class SourceTypeController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly OneSmallStepContext _context;


        public SourceTypeController(IUnitOfWork unitOfWork, OneSmallStepContext context)
        {
            _unitOfWork = unitOfWork;
            _context = context;
        }





        // POST: Person/Edit/1

        [HttpGet]
        [Route("sourceType/{sourceTypeId}")]
        public EditSourceTypeViewModel Get(int sourceTypeId)
        {

            var entities = _unitOfWork.SourceType.SingleOrDefault(mt => mt.SourceTypeID == sourceTypeId);
            //var entities = _unitOfWork.Person.GetByID(p => p.PersonID == id, includeProperties: "PersonType");

            //entities = Mapper.Map<IEnumerable<Person>, IEnumerable<EditPersonViewModel>>(entities);
            //var PersonTypes = _context.PersonType.ToList();
            //var vm = Mapper.Map<Person, EditPersonViewModel>(entities);
            var vm = Mapper.Map<SourceType, EditSourceTypeViewModel>(entities);
            //vm.PersonTypes = PersonTypes;
            //vm.PersonTypes.ToList();


            return (vm);
        }





        // POST: api/EmployeesAPI
        //[ResponseType(typeof(Employee))]
        [HttpPost]
        [Route("sourceType/create")]
        public IHttpActionResult PostSourceType(SourceType SourceType)
        //public IHttpActionResult PostPerson(CreatePersonViewModel Person) >> need to switch to this<<<
        //public PersonViewModel PostPerson(Person Person)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //db.Employees.Add(employee);
            //db.SaveChanges();

            _unitOfWork.SourceType.Add(SourceType);
            _unitOfWork.Complete();

            //return Ok(Person);
            return Ok(SourceType.SourceTypeID);

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





        [HttpPut]
        [Route("sourceType/update")]
        //api/person/delete/" + personId,
        //public PersonViewModel Update(int personId, Person Person)
        public SourceTypeViewModel Update(SourceType SourceType)
        {
            //var domainModel = _unitOfWork.Person.Get(x => x.PersonID == personId).FirstOrDefault();

            //_unitOfWork.Person.Update(domainModel);
            _unitOfWork.SourceType.Update(SourceType);
            _unitOfWork.Complete();
            //var vm = Mapper.Map<Person, PersonViewModel>(domainModel);
            var vm = Mapper.Map<SourceType, SourceTypeViewModel>(SourceType);
            return vm;
        }



        [HttpGet]
        [Route("sourceType")]
        public IEnumerable<SourceTypeViewModel> Get()

        {
            //return _repository.GetProfileForEdit(User.Identity.Name);
            var domainModel = _unitOfWork.SourceType.Get(null, x => x.OrderBy(z => z.SourceTypeName));

            //return _unitOfWork.Person.Get(null, x => x.OrderBy(z => z.LastName), includeProperties: "PersonType");

            //return View(courses.ToList());

            var vm = Mapper.Map<IEnumerable<SourceType>, IEnumerable<SourceTypeViewModel>>(domainModel);
            //var vm = Ok(Mapper.Map<IEnumerable<PersonViewModel>>(domainModel));
            //return (PersonViewModel)vm;
            return vm;

        }

        [Route("sourceType/delete/{sourceTypeId}")]
        //api/person/delete/" + personId,
        public SourceTypeViewModel Delete(int messageTypeId)
        {
            var domainModel = _unitOfWork.SourceType.Get(x => x.SourceTypeID == messageTypeId).FirstOrDefault();

            _unitOfWork.SourceType.Remove(domainModel);
            _unitOfWork.Complete();
            var vm = Mapper.Map<SourceType, SourceTypeViewModel>(domainModel);
            return vm;
        }


    }
}
