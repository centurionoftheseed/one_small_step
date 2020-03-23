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
    public class SourceController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly OneSmallStepContext _context;


        public SourceController(IUnitOfWork unitOfWork, OneSmallStepContext context)
        {
            _unitOfWork = unitOfWork;
            _context = context;
        }

        [HttpGet]
        [Route("source/{sourceId}")]
        //public EditSourceViewModel2 Get(int sourceId)
        public EditSourceViewModel Get(int sourceId)
        {

            var entities = _unitOfWork.Source.SingleOrDefault(m => m.SourceID == sourceId);
            var vm = Mapper.Map<Source, EditSourceViewModel>(entities);
            return (vm);
        }


        [HttpPost]
        [Route("source/create")]
        public IHttpActionResult PostSourceType(Source Source)
        {


            _unitOfWork.Source.Add(Source);
            _unitOfWork.Complete();


            return Ok(Source.SourceID);


        }


        [HttpGet]
        [Route("source")]
        public IEnumerable<SourceViewModel> Get()

        {
            //return _repository.GetProfileForEdit(User.Identity.Name);
            var domainModel = _unitOfWork.Source.Get(null, x => x.OrderBy(z => z.SourceName), includeProperties: "SourceType");

            //return _unitOfWork.Person.Get(null, x => x.OrderBy(z => z.LastName), includeProperties: "PersonType");

            //return View(courses.ToList());

            var vm = Mapper.Map<IEnumerable<Source>, IEnumerable<SourceViewModel>>(domainModel);
            //var vm = Ok(Mapper.Map<IEnumerable<PersonViewModel>>(domainModel));
            //return (PersonViewModel)vm;
            return vm;

        }


        [HttpPut]
        [Route("source/update")]
        public SourceViewModel Update(Source Source)
        {
            //var domainModel = _unitOfWork.Person.Get(x => x.PersonID == personId).FirstOrDefault();

            //_unitOfWork.Person.Update(domainModel);
            _unitOfWork.Source.Update(Source);
            _unitOfWork.Complete();
            //var vm = Mapper.Map<Person, PersonViewModel>(domainModel);
            var vm = Mapper.Map<Source, SourceViewModel>(Source);
            return vm;
        }



        [Route("source/delete/{sourceId}")]
        //api/person/delete/" + personId,
        public SourceViewModel Delete(int sourceId)
        {
            var domainModel = _unitOfWork.Source.Get(x => x.SourceID == sourceId).FirstOrDefault();

            _unitOfWork.Source.Remove(domainModel);
            _unitOfWork.Complete();
            var vm = Mapper.Map<Source, SourceViewModel>(domainModel);
            return vm;
        }


    }

}
