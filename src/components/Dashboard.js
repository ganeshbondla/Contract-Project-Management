import React, { useState } from "react";
import Header from "./Header";
import "../css/custom.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [filtername, setFiltername] = useState("");
  const [typeviewgird, setTypeViewGrid] = useState(true);

  const [inputaccountid, setInputAccountId] = useState(0);
  const [inputprojectcount, setInputProjectCount] = useState('');
  const [inputaccountlogo, setInputAccountLogo] = useState('');
  const [inputaccountname, setInputAccountName] = useState('');
  const [inputforecast, setInputForecast] = useState('');
  const [inputrealized, setInputRealized] = useState('');
  const [inputpending, setInputPending] = useState('');

  const listOfAccounts = [
    {
      id : 1,
      account_logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      account_name: "InfoSys",
      projects_count : 3,
      account_forcasted: 100000,
      account_realized: 80000,
      account_pending: 30000,
    },
    {
      id : 2,
      account_logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      account_name: "Google",
      projects_count : 2,
      account_forcasted: 1900000,
      account_realized: 1200000,
      account_pending: 1000000,
    },
    {
      id : 3,
      account_logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      account_name: "TCS",
      projects_count : 0,
      account_forcasted: 10000,
      account_realized: 5000,
      account_pending: 2000,
    },
    {
      id : 4,
      account_logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      account_name: "Wipro",
      projects_count : 2,
      account_forcasted: 1000,
      account_realized: 500,
      account_pending: 100,
    },
    {
      id : 5,
      account_logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      account_name: "Neev Systems",
      projects_count : 5,
      account_forcasted: 1000000,
      account_realized: 500000,
      account_pending: 200000,
    },
    {
      id : 6,
      account_logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      account_name: "Deloitte",
      projects_count : 1,
      account_forcasted: 10000000,
      account_realized: 5000000,
      account_pending: 4000000,
    },
    {
      id : 7,
      account_logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      account_name: "Tech Mahendra",
      projects_count : 1,
      account_forcasted: 100000,
      account_realized: 50000,
      account_pending: 20000,
    },
  ];

  const [statelistofaccounts, setStateListOfAccounts] = useState(listOfAccounts);

  const filterWithName = (e) => {
    e.preventDefault();
    const inputVal = e.target.value;
    setFiltername(inputVal);
  };

  const filteredData = statelistofaccounts.filter((m) =>
    m.account_name.toLowerCase().includes(filtername)
  );

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
      account_logo: URL.createObjectURL(inputaccountlogo),
      account_name: inputaccountname,
      projects_count: parseInt(inputprojectcount),
      account_forcasted: parseInt(inputforecast),
      account_realized: parseInt(inputrealized),
      account_pending: parseInt(inputpending)
    }

   console.log(newAccountObject);

   const finalOneIsToSave = [...statelistofaccounts];

   finalOneIsToSave.push(newAccountObject);

   setStateListOfAccounts(finalOneIsToSave);

   setInputAccountId('');
   setInputAccountLogo('');
   setInputAccountName('');
   setInputForecast('');
   setInputRealized('');
   setInputPending('');
   setInputProjectCount('');

   document.getElementById("addNewAccountForm").reset();
   document.getElementById('closeAddAccount').click();

  }

  const editSingleObject = (oid) => {
    const foundData = statelistofaccounts.find(x => x.id === oid);
    setInputAccountId(foundData.id);
    setInputAccountLogo(foundData.account_logo);
    setInputAccountName(foundData.account_name);
    setInputProjectCount(foundData.projects_count);
    setInputForecast(foundData.account_forcasted);
    setInputRealized(foundData.account_realized);
    setInputPending(foundData.account_pending);
    console.log(inputaccountid);
  }

  const updateSingleObject = (e) => {
    e.preventDefault();
    const updatesingle = statelistofaccounts.find(x => x.id === inputaccountid);
    updatesingle.account_name = inputaccountname;
    updatesingle.projects_count = inputprojectcount;
    updatesingle.account_logo = inputaccountlogo;
    updatesingle.account_forcasted = inputforecast;
    updatesingle.account_realized = inputrealized;
    updatesingle.account_pending = inputpending;

    setStateListOfAccounts(statelistofaccounts);

    setInputAccountId('');
    setInputAccountLogo('');
    setInputAccountName('');
    setInputForecast('');
    setInputRealized('');
    setInputPending('');
    setInputProjectCount('');

    document.getElementById('closeEditAccount').click();

  }

  const projectListAction = (passId, passName) => {
      console.log(passId);
      localStorage.setItem('accountId', passId);
      localStorage.setItem('accountName', passName);
  }

  const filterDataShowGrid = filteredData.map((x) => {
    return (
      <div className="col-lg-4 col-md-4 p-2 " key={x.id}>
        <div className="mainBorder p-3 rounded ">
          <Link className="baseColor linkEffects" to={`/projects-list?id=${x.id}&name=${x.account_name}`} onClick={() => projectListAction(x.id, x.account_name)}>
            <div className="text-center">
              <img src={x.account_logo} height={30} width={80} alt="test" />
            </div>
            <hr></hr>
            <div className="text-center">
              <div>
                Account Name : <b>{x.account_name}</b>
              </div>
              <div>
                No Of Projects : <b>{x.projects_count}</b>
              </div>
              <b>REVENUE :</b>
              <div>Forecasted : ${x.account_forcasted}</div>
              <div>Realized : ${x.account_realized}</div>
              <div>Pending : ${x.account_pending}</div>
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
      <Link className="baseColor linkEffects" to={`/projects-list?id=${x.id}&name=${x.account_name}`} onClick={() => projectListAction(x.id, x.account_name)}>
      <div className="row p-3 rounded mainBorder my-auto">
        <div className="col-md-2 col-lg-2 text-center my-auto">
          <img src={x.account_logo} height={30} width={80} alt="test" />
          <hr></hr>
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
            Account Name : <b>{x.account_name}</b>
          </div>
          <div>
              No Of Projects : <b>{x.projects_count}</b>
          </div>
          <b>REVENUE :</b>
          <div>Forecasted : ${x.account_forcasted}</div>
          <div>Realized : ${x.account_realized}</div>
          <div>Pending : ${x.account_pending}</div>
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
              <h5>List of Accounts</h5>
            </div>
            <div className="col-lg-4 col-md-4 text-center my-auto mb-2">
              <input
                type="text"
                className="form-control"
                id="accountName"
                onChange={filterWithName}
                placeholder="Search : Enter Account Name...."
              />
            </div>
            <div className="col-lg-4 col-md-4 text-center my-auto mb-2">
              <div className="modal fade" id="addAccountModal" role="dialog" aria-labelledby="addAccountModal" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                      <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="addAccountModal">Add New Account</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <form onSubmit={addNewAccountInList} id="addNewAccountForm">
                      <div className="modal-body">
                        <div className="form-group mb-2">
                          <input type="file" className="form-control" id="inputAccountLogo" onChange={(e) => setInputAccountLogo(e.target.files[0])} placeholder="Logo : Enter Image URL" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputAccountName" onChange={(e) => setInputAccountName(e.target.value)} placeholder="Account Name : Enter Account Name" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="number" className="form-control" id="inputProjectCount" onChange={(e) => setInputProjectCount(e.target.value)} placeholder="No. Of Projects : Enter Projects Count" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="number" className="form-control" id="inputAccountForcast" onChange={(e) => setInputForecast(e.target.value)} placeholder="Forecast Amount : Enter Forecast Amount" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="number" className="form-control" id="inputAccountRealized" onChange={(e) => setInputRealized(e.target.value)} placeholder="Realized Amount : Enter Realized Amount" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="number" className="form-control" id="inputAccountRemaining" onChange={(e) => setInputPending(e.target.value)} placeholder="Remaining Amount : Enter Remaining Amount" required />
                        </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" id="closeAddAccount" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" className="btn baseBackround btnvtwo">Add Account</button>
                      </div>
                      </form>
                      </div>
                  </div>
              </div>
              <button className="btn baseBackround btnvtwo" data-toggle="modal" data-target="#addAccountModal">
                + Add Account
              </button>
            </div>
          </div>

          {/* List of Accounts Display */}
          <div className="modal fade" id="editAccountModal" role="dialog" aria-labelledby="editAccountModal" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                      <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="editAccountModal">Edit Account</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <form onSubmit={updateSingleObject}>
                      <div className="modal-body">
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputAccountLogo" value={inputaccountlogo} onChange={(e) => setInputAccountLogo(e.target.value)} placeholder="Logo : Enter Image URL" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="text" className="form-control" id="inputAccountName" value={inputaccountname} onChange={(e) => setInputAccountName(e.target.value)} placeholder="Account Name : Enter Account Name" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="number" className="form-control" id="inputProjectCount" value={inputprojectcount} onChange={(e) => setInputProjectCount(e.target.value)} placeholder="No. Of Projects : Enter Projects Count" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="number" className="form-control" id="inputAccountForcast" value={inputforecast} onChange={(e) => setInputForecast(e.target.value)} placeholder="Forecast Amount : Enter Forecast Amount" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="number" className="form-control" id="inputAccountRealized" value={inputrealized} onChange={(e) => setInputRealized(e.target.value)} placeholder="Realized Amount : Enter Realized Amount" required />
                        </div>
                        <div className="form-group mb-2">
                          <input type="number" className="form-control" id="inputAccountRemaining" value={inputpending} onChange={(e) => setInputPending(e.target.value)} placeholder="Remaining Amount : Enter Remaining Amount" required />
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

export default Dashboard;
