import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../css/custom.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [filtername, setFiltername] = useState("");
  const [typeviewgird, setTypeViewGrid] = useState(true);
  const [inputaccountid, setInputAccountId] = useState(0);
  const [inputprojectcount, setInputProjectCount] = useState('');
  const [inputaccountlogo, setInputAccountLogo] = useState('');
  const [inputaccountname, setInputAccountName] = useState('');
  const [inputforecast, setInputForecast] = useState('');
  const [inputrealized, setInputRealized] = useState('');
  const [inputpending, setInputPending] = useState('');
  const [paramAccountId, setParamAccountId]  = useState ();
  const [paramAccountName, setParamAccountName] = useState('');

  const paramId = localStorage.getItem('accountId');
  const paramAcName = localStorage.getItem('accountName');

  console.log(inputpending);
  
  useEffect (()=>{
    setParamAccountId(paramId);
    setParamAccountName(paramAcName);
  }, [paramId, paramAcName]);

  
  const listOfProjects = [
    {
      id : 1,
      account_id : 1,
      project_name: "Amazon",
      Spoc : 'amazon@gmail.com',
      type : 'Fixed Bid'
    },
    {
      id : 2,
      account_id : 1,
      project_name: "Alibaba",
      Spoc : 'alibaba@gmail.com',
      type : 'Staff Aug'
    },
    {
      id : 3,
      account_id : 2,
      project_name: "Flipkart",
      Spoc : 'flipkart@gmail.com',
      type : 'Fixed Bid'
      
    },
    {
        id : 4,
        account_id : 2,
        project_name: "AJIO",
        Spoc : 'ajio@gmailcom',
        type : 'Staff Aug'
        
      },
      {
        id : 5,
        account_id : 3,
        project_name: "Myntra",
        Spoc : 'myntra@gmail.com',
        type : 'Staff Aug'
        
      },
      {
        id : 6,
        account_id : 3,
        project_name: "Reliance Digital",
        Spoc : 'reliancedigital@gmail.com',
        type : 'Fixed Bid'
        
      },
      {
        id : 7,
        account_id : 4,
        project_name: "Max Fashion",
        Spoc : 'maxfashion@gmail.com',
        type : 'Staff Aug'
        
      },
      {
        id : 8,
        account_id : 4,
        project_name: "Jio Mart",
        Spoc : 'jiomart@gmail.com',
        type : 'Fixed Bid'
        
      },
      {
        id : 9,
        account_id : 5,
        project_name: "D Mart",
        Spoc : 'dmart@gmail.com',
        type : 'Fixed Bid',
        
      },
      {
        id : 10,
        account_id : 5,
        project_name: "Fastrack",
        Spoc : 'fasttrack@gmail.com',
        type : 'Fixed Bid',
        
      },
      {
        id : 11,
        account_id : 6,
        project_name: "Puma",
        Spoc : 'puma@gmail.com',
        type : 'Fixed Bid'
        
      },
      {
        id : 12,
        account_id : 6,
        project_name: "Sparx",
        Spoc : 'sparx@gmail.com',
        type : 'Fixed Bid'
        
      },
      {
        id : 13,
        account_id : 7,
        project_name: "Nike",
        Spoc : 'nike@gmail.com',
        type : 'Staff Aug'
        
      },
      {
        id : 14,
        account_id : 7,
        project_name: "Sonata",
        Spoc : 'sonata@gmail.com',
        type : 'Staff Aug'
      },
  ];

  const [statelistofaccounts, setStateListOfAccounts] = useState(listOfProjects);

  const filterWithName = (e) => {
    e.preventDefault();
    const inputVal = e.target.value;
    setFiltername(inputVal);
  };

  const filteredData = statelistofaccounts
   .filter((m) => m.account_id === parseInt(paramAccountId))
   .filter(m => m.project_name.toLowerCase().includes(filtername))
  
  const changeTheGridView = () => {
    setTypeViewGrid(true);
  }

  const changeTheListView = () => {
    setTypeViewGrid(false);
  }

  const deleteSingleObject = (oid) => {
    const remainingData = statelistofaccounts.filter(x => x.id !== oid)
    setStateListOfAccounts(remainingData);
  }

  const addNewAccountInList = (e) => {
    e.preventDefault();
    
    const newAccountObject = {
      id : Math.floor(1000 + Math.random() * 9999),
      account_id : parseInt(paramAccountId),
      project_name: inputaccountname,
      Spoc: inputprojectcount,
      type: inputforecast,
    }

   console.log(newAccountObject);

   const finalOneIsToSave = [...statelistofaccounts];

   finalOneIsToSave.push(newAccountObject);

   console.log(finalOneIsToSave);

   setStateListOfAccounts(finalOneIsToSave);

   setInputAccountId('');
   setInputAccountName('');
   setInputForecast('');
   setInputRealized('');
   setInputPending('');
   setInputProjectCount('');

   document.getElementById('closeAddAccount').click();

  }

  const editSingleObject = (oid) => {
    const foundData = statelistofaccounts.find(x => x.id === oid);
    setInputAccountId(foundData.id);
    setInputAccountLogo(foundData.account_logo);
    setInputAccountName(foundData.project_name);
    setInputProjectCount(foundData.Spoc);
    setInputForecast(foundData.type);
    setInputRealized(foundData.bid);
    console.log(inputaccountid);
  }

  const updateSingleObject = (e) => {
    e.preventDefault();
    const updatesingle = statelistofaccounts.find(x => x.id === inputaccountid);
    updatesingle.project_name = inputaccountname;
    updatesingle.Spoc = inputprojectcount;
    updatesingle.account_logo = inputaccountlogo;
    updatesingle.type = inputforecast;
    updatesingle.bid = inputrealized;

    setStateListOfAccounts(statelistofaccounts);

    setInputAccountId('');
    setInputAccountLogo('');
    setInputAccountName('');
    setInputForecast('');
    setInputRealized('');
    setInputProjectCount('');

    document.getElementById('closeEditAccount').click();

  }

  const projectListAction = (passId, passName) => {
      console.log(passId);
      localStorage.setItem('projectId', passId);
      localStorage.setItem('projectName', passName);
  }

  const filterDataShowGrid = filteredData.map((x) => {
    return (
      <div className="col-lg-4 col-md-4 p-2 " key={x.id}>
        <div className="mainBorder p-3 rounded ">
          <Link className="baseColor linkEffects" to={`/projects-details?id=${x.id}&name=${x.project_name}`} onClick={() => projectListAction(x.id, x.project_name)}>
            
            <div className="text-center">
              <div>
                Project Name : <b>{x.project_name}</b>
              </div>
              <div>
                Spoc : <b>{x.Spoc}</b>
              </div>
              <div>Type : {x.type}</div>
            </div>
          </Link>
          <div className="row">
            <div className="col-6 text-left">
              <button className="btn baseColor commonHover" onClick={() => editSingleObject(x.id)} data-toggle="modal" data-target="#editAccountModal"><FaEdit /></button>
            </div>
            <div className="col-6 text-right">
              <button className="btn baseColor commonHover" onClick={() => deleteSingleObject(x.id)}><FaTrashAlt /></button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const filterDataShowList = filteredData.map((x) => {
    return(
      <div className="col-lg-12 col-md-12 text-left mb-3" key={x.id}>
        <Link className="baseColor linkEffects" to={`/projects-details?id=${x.id}&name=${x.project_name}`} onClick={() => projectListAction(x.id, x.project_name)}>
        <div className="row p-3 rounded mainBorder my-auto">
            <div className="col-md-2 col-lg-2 text-center my-auto">
              <div className="row mb-2">
                <div className="col">
                  <button className="btn baseColor commonHover" onClick={() => editSingleObject(x.id)} data-toggle="modal" data-target="#editAccountModal"><FaEdit size={17}/></button>
                </div>
                <div className="col">
                  <button className="btn baseColor commonHover" onClick={() => deleteSingleObject(x.id)}><FaTrashAlt size={16} /></button>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-10">
              <div>
                Project Name : <b>{x.project_name}</b>
              </div>
              <div>
                  Spoc : <b>{x.Spoc}</b>
              </div>
              <div>Type: {x.type}</div>
            </div>
        </div>
        </Link>
      </div>
    )
  });

  return (
    <>
      <div className="p-4 container-fluid">
        <div className="p-4 border border-white rounded pageStylesHere">
          {/* Rendered Header */}
          <Header />

          {/* List and Grid Actions */}
          <div className="row">
            <div className="col-lg-12 col-md-12 text-right">
              <button className={typeviewgird ? "btn btn-sm baseColor commonHover activeIcon" : "btn btn-sm baseColor commonHover"} onClick={changeTheGridView}>
                <BsGrid3X3GapFill />
              </button>
              <button className={typeviewgird ? "btn btn-sm baseColor commonHover" : "btn btn-sm baseColor commonHover activeIcon"} onClick={changeTheListView}>
                <BsList />
              </button>
            </div>
          </div>

          {/* Filters and Add Account Actions */}
          <div className="row my-auto mb-4">
            <div className="col-lg-4 col-md-4 text-center my-auto mb-2">
              <h5>List of Projects : {paramAccountName}</h5>
            </div>
            <div className="col-lg-4 col-md-4 text-center my-auto mb-2">
              <input
                type="text"
                className="form-control"
                id="accountName"
                onChange={filterWithName}
                placeholder="Search : Enter Project Name...."
              />
            </div>
            <div className="col-lg-4 col-md-4 text-center my-auto mb-2">
              <div className="modal fade" id="addAccountModal" role="dialog" aria-labelledby="addAccountModal" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                      <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="addAccountModal">Add New Project</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <form onSubmit={addNewAccountInList}>
                      <div className="modal-body">
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputAccountName" onChange={(e) => setInputAccountName(e.target.value)} placeholder="Project Name : Project Name" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputProjectCount" onChange={(e) => setInputProjectCount(e.target.value)} placeholder="Spoc : Enter Spoc definition" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputAccountForcast" onChange={(e) => setInputForecast(e.target.value)} placeholder="Type : Enter the Project Type" required />
                        </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" id="closeAddAccount" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" className="btn baseBackround btnvtwo">Add Project</button>
                      </div>
                      </form>
                      </div>
                  </div>
              </div>
              <button className="btn baseBackround btnvtwo" data-toggle="modal" data-target="#addAccountModal">
                + Add Project
              </button>
            </div>
          </div>

          {/* List of Accounts Display */}
          <div className="modal fade" id="editAccountModal" role="dialog" aria-labelledby="editAccountModal" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                      <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="editAccountModal">Edit Project</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <form onSubmit={updateSingleObject}>
                      <div className="modal-body">
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputAccountName" defaultValue={inputaccountname} onChange={(e) => setInputAccountName(e.target.value)} placeholder="Project Name : Enter Project Name" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputProjectCount" defaultValue={inputprojectcount} onChange={(e) => setInputProjectCount(e.target.value)} placeholder="Spoc : Enter Spoc " required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputAccountForcast" defaultValue={inputforecast} onChange={(e) => setInputForecast(e.target.value)} placeholder="Type : Enter Project Type" required />
                        </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" id="closeEditAccount" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" className="btn baseBackround btnvtwo">Save changes</button>
                      </div>
                      </form>
                      </div>
                  </div>
              </div>
          <div className="row mt-4 justify-content-center">
            {
              typeviewgird ? filterDataShowGrid : filterDataShowList
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
