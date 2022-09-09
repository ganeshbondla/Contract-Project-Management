import React, { useEffect, useState } from 'react';
import Header from "./Header";
import "../css/custom.css";
import sow from '../incl/sample.pdf';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const ProjectDetails = () => {

    const [localProjectId, setLocalPorjectId] = useState('');
    const [localProjectName, setLocalProjectName] = useState('');
    const [sowdocStatus, setSowDocStatus] = useState(false);
    const [sowdoc, setSowDoc] = useState(sow);
    const [sowname, setSowName] = useState('SOW1234');
    const [crudActions, setCrudActions] = useState(false);
    const [crudActionsCompleted, setCrudActionsCompleted] = useState(false);
    const [showSowname, setShowSowName] = useState('SOW1234...');

    useEffect(() => {
        setSowDoc(sowdoc);
        setSowDocStatus(true);
        setLocalPorjectId(localStorage.getItem('projectId'));
        setLocalProjectName(localStorage.getItem('projectName'));
    },[setLocalPorjectId, setLocalProjectName,sowdocStatus, setSowDoc, sowdoc, setSowName])

    // Invoice Actions START
    const listOfInvoices = [
        {
            id : 1,
            project_id : localProjectId,
            invoice_id : 1234,
            invoice_date : '2022-09-02',
            invoice_amount : 10000,
            due_date : '2022-09-22'
        },
        {
            id : 2,
            project_id : localProjectId,
            invoice_id : 4321,
            invoice_date : '2022-09-19',
            invoice_amount : 15000,
            due_date : '2022-09-29'
        },
        {
            id : 3,
            project_id : localProjectId,
            invoice_id : 1245,
            invoice_date : '2022-09-01',
            invoice_amount : 10000,
            due_date : '2022-09-22'
        }
    ]

    const [listOfInvoicesIs, setListOfInvoices] = useState(listOfInvoices);

    const totalInvoice = listOfInvoicesIs.length;

    const[invoiceId, setInvoiceId] = useState();
    const[inputInvoiceId, setInputInvoiceId] = useState();
    const[inputInvoiceDate, setInputInvoiceDate] = useState('');
    const[inputInvoiceAmount, setInputInvoiceAmount] = useState();
    const[inputInvoiceDue, setInputInvoiceDue] = useState('');

    const AddNewInvoiceInList = (e) => {
        e.preventDefault();

        const newObjectId = {
            id : Math.floor(1000 + Math.random() * 9999),
            project_id : localProjectId,
            invoice_id : parseInt(inputInvoiceId),
            invoice_date : inputInvoiceDate,
            invoice_amount : parseInt(inputInvoiceAmount),
            due_date : inputInvoiceDue
        }

        const oldListIs = [...listOfInvoicesIs];

        oldListIs.push(newObjectId);

        setListOfInvoices(oldListIs);

        setInvoiceId();
        setInputInvoiceId();
        setInputInvoiceDate('');
        setInputInvoiceAmount();
        setInputInvoiceDue('');

        document.getElementById('closeAddInvoiceNow').click();
        document.getElementById('addNewInvoice').reset();
    }

    const EditInvoiceDetails = (oid) => {
        const findInList = listOfInvoicesIs.find(x => x.id === oid);
        setInvoiceId(findInList.id);
        setInputInvoiceId(findInList.invoice_id);
        setInputInvoiceDate(findInList.invoice_date);
        setInputInvoiceAmount(findInList.invoice_amount);
        setInputInvoiceDue(findInList.due_date);
    }

    const editNewInvoiceInList = (e) => {
        e.preventDefault();
        const findTheData = listOfInvoicesIs.find(x => x.id === invoiceId);
        findTheData.invoice_id = inputInvoiceId;
        findTheData.invoice_amount = inputInvoiceAmount;
        findTheData.invoice_date = inputInvoiceDate;
        findTheData.due_date = inputInvoiceDue;

        setListOfInvoices(listOfInvoicesIs);

        setInvoiceId();
        setInputInvoiceId();
        setInputInvoiceDate('');
        setInputInvoiceAmount();
        setInputInvoiceDue('');

        document.getElementById('closeEditInvoiceNow').click();
       // document.getElementById('editNewInvoice').reset();
    }

    const deleteInvoiceFromList = (oid) => {
        const remains = listOfInvoicesIs.filter(x => x.id !== oid);
        setListOfInvoices(remains);
    }

    const listOfInvoiceShowReturn = listOfInvoicesIs.map((x,i) => {
        return(
            <tr key={i}>
            <th scope="row">#{x.invoice_id}</th>
            <td>{x.invoice_amount}</td>
            <td>{x.invoice_date}</td>
            <td>{x.due_date}</td>
            {crudActions ?
            <td><button className='btn btn-sm baseBackround btnvtwo' onClick={() => EditInvoiceDetails(x.id)} data-toggle="modal" data-target="#editNewInvoice"><FaEdit /></button> &nbsp;&nbsp; <button className='btn btn-sm baseBackround btnvtwo' onClick={() => deleteInvoiceFromList(x.id)}><FaTrashAlt /></button></td>
            : ''}
            </tr>
        )
    });
    // Invoice Actions END


    // Employees Actions START
    const listOfEmployees = [
        {
            id : 1,
            emp_name : 'Ganesh',
            emp_utilization : 80,
            emp_cost_hr : 20,
            emp_bill_rate : 15,
            emp_reporting_manager : 'example@example.com'
        },
        {
            id : 2,
            emp_name : 'Ramesh',
            emp_utilization : 70,
            emp_cost_hr : 10,
            emp_bill_rate : 8,
            emp_reporting_manager : 'example@example.com'
        }
    ]

    const [listOfEmployeesIs, setListOfEmployees] = useState(listOfEmployees);

    const totalEmployees = listOfEmployeesIs.length;

    const [empUniqId,setEmpUniqId] = useState(0);
    const [inputEmployeeName, setInputEmployeeName] = useState('');
    const [inputEmployeeUtilization, setInputEmployeeUtilization] = useState('');
    const [inputCostHr, setInputCostHr] = useState('');
    const [inputBillRate, setInputBillRate] = useState('');
    const [inputReportManager, setInputReportManager] = useState('');

    const showListOfEmployeesFromState = listOfEmployeesIs.map(
        (x,i) => {
            return(
            <tr key={i}>
            <th scope="row">{x.emp_name}</th>
            <td>{x.emp_utilization}%</td>
            <td>${x.emp_cost_hr}</td>
            <td>${x.emp_bill_rate}</td>
            <td>{x.emp_reporting_manager}</td>
            {crudActions ?
            <td><button className='btn btn-sm baseBackround btnvtwo' onClick={() => editEmployeeInList(x.id)} data-toggle="modal" data-target="#editNewEmployee"><FaEdit /></button> &nbsp;&nbsp; <button className='btn btn-sm baseBackround btnvtwo' onClick={() => deleteEmployeeFromList(x.id)}><FaTrashAlt /></button></td>
            : ''}
            </tr>
            )
        }
    )

    const addNewEmployeeInList = (e) => {
          e.preventDefault();

          const newObjectEmployee = {
            id : Math.floor(1000 + Math.random() * 9999),
            emp_name : inputEmployeeName,
            emp_utilization : parseInt(inputEmployeeUtilization),
            emp_cost_hr : parseInt(inputCostHr),
            emp_bill_rate : parseInt(inputBillRate),
            emp_reporting_manager : inputReportManager
          }

          const addnewListToAdd = [...listOfEmployeesIs];

          addnewListToAdd.push(newObjectEmployee);

          setListOfEmployees(addnewListToAdd);

          setInputEmployeeName('');
          setInputEmployeeUtilization('');
          setInputCostHr('');
          setInputBillRate('');
          setInputReportManager('');

          document.getElementById('addNewEmployeeForm').reset();
          document.getElementById('closeAddNewEmployee').click();

    }

    const editEmployeeInList = (oid) => {
        const findEmployee = listOfEmployeesIs.find(x => x.id === oid);

        setEmpUniqId(findEmployee.id)
        setInputEmployeeName(findEmployee.emp_name);
        setInputEmployeeUtilization(findEmployee.emp_utilization);
        setInputCostHr(findEmployee.emp_cost_hr);
        setInputBillRate(findEmployee.emp_bill_rate);
        setInputReportManager(findEmployee.emp_reporting_manager);
    }

    const updateNewEmployeeInList = (e) => {
        e.preventDefault();

        const findFromEmployeeList = listOfEmployeesIs.find(x => x.id === empUniqId);

        findFromEmployeeList.emp_name = inputEmployeeName;
        findFromEmployeeList.emp_utilization = inputEmployeeUtilization;
        findFromEmployeeList.emp_cost_hr = inputCostHr;
        findFromEmployeeList.emp_bill_rate = inputBillRate;
        findFromEmployeeList.emp_reporting_manager = inputReportManager;

        setListOfEmployees(listOfEmployeesIs);

        setEmpUniqId(0);
        setInputEmployeeName('');
        setInputEmployeeUtilization('');
        setInputCostHr('');
        setInputBillRate('');
        setInputReportManager('');

        document.getElementById('closeEditModalEmployee').click();
    }

    const deleteEmployeeFromList = (oid) => {
        const remains = listOfEmployeesIs.filter(x => x.id !== oid);
        setListOfEmployees(remains);
    }
    // Employees Actions END

    const makeActionsShow = () => {
        setCrudActions(true);
        setCrudActionsCompleted(true);
    }

    const makeActionsHide = () => {
        setCrudActions(false);
        setCrudActionsCompleted(false);
    }

    const workFileActions = (e) => {
        const filenameIs = e.target.files[0].name;
        const newSowIs = URL.createObjectURL(e.target.files[0]);
        setSowDoc(newSowIs);
        setShowSowName(filenameIs);
        setSowName(filenameIs);
    }

    const DownloadSowFileNow = () => {
        const link = document.createElement('a');
        link.href = sowdoc;
        link.setAttribute(
            'download',
            `${sowname}`
        );

       document.body.appendChild(link);
       link.click();
    }

    return(
        <>
        <div className="p-4 container-fluid">
        <div className="p-4 border border-white rounded pageStylesHere">
          <Header />

            <div className='row p-2 my-auto'>
                <div className='col-md-4 col-lg-4 text-center my-auto'>
                    <h5>#{localProjectId} - {localProjectName}</h5>
                </div>
                <div className='col-md-4 col-lg-4 text-center my-auto'>
                    SOW : { crudActions ?
                    <form>
                        <div className="custom-file text-left">
                            <input type="file" className="custom-file-input" accept='.pdf,.doc' onChange={workFileActions} id="validatedCustomFile" required />
                            <label className="custom-file-label" htmlFor="validatedCustomFile" data-browse='Choose SOW'>{showSowname}</label>
                        </div>
                    </form>
                    : <button className='btn btn-sm baseBackround btnvtwo' onClick={DownloadSowFileNow}> {sowname} <FaDownload size={12} /></button> }
                </div>
                <div className='col-md-4 col-lg-4 text-center my-auto'>
                {
                crudActionsCompleted ? 
                <div className="custom-control custom-switch baseColor">
                    <input type="checkbox" style={{color:'#6D0FB6'}} className="custom-control-input custom-control-input-lg baseColor" id="customSwitch1" onClick={makeActionsHide} checked/>
                    <label className="custom-control-label baseColor" htmlFor="customSwitch1">Actions</label>
                </div>
                : 
                <div className="custom-control custom-switch baseColor">
                    <input type="checkbox" className="custom-control-input baseColor" id="customSwitch1" onClick={makeActionsShow} />
                    <label className="custom-control-label" htmlFor="customSwitch1">Actions</label>
                </div>
                }
                </div>
            </div>

            <div className="accordion mt-3" id="accordionExample">
                <div className='container'>
                    <div className="card">
                    <div className="card-header d-flex my-auto" id="headingOne">
                        <b className='courser' data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">List of Invoices</b>
                        <b className="baseColor ml-auto my-auto">{ crudActions ? <button className='btn btn-sm baseBackround btnvtwo' data-toggle="modal" data-target="#AddNewInvoice">+ Add Invoice</button> : "" } Total Invoice : {totalInvoice}</b>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        <table className="table table-striped text-center">
                            <thead>
                                <tr>
                                <th scope="col" className='baseColor'>Invoice Id</th>
                                <th scope="col" className='baseColor'>Invoice Amount</th>
                                <th scope="col" className='baseColor'>Invoice Date</th>
                                <th scope="col" className='baseColor'>Invoice Due</th>
                                { crudActions ? <th scope="col" className="baseColor">Actions</th> : ""}
                                </tr>
                            </thead>
                            <tbody>
                               {listOfInvoiceShowReturn}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>

                <div className='container mt-3'>
                    <div className="card">
                    <div className="card-header d-flex my-auto" id="headingTwo">
                        <b className='courser' data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">List of Employee's</b>
                        <b className="baseColor ml-auto">{ crudActions ? <button className='btn btn-sm baseBackround btnvtwo' data-toggle="modal" data-target="#addNewEmployee">+ Add Employee</button> : "" } Total Employee's : {totalEmployees}</b>
                    </div>

                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        <table className="table table-striped text-center">
                            <thead>
                                <tr>
                                <th scope="col" className='baseColor'>Employee Name</th>
                                <th scope="col" className='baseColor'>Utilization</th>
                                <th scope="col" className='baseColor'>Cost / Hr</th>
                                <th scope="col" className='baseColor'>Bill Rate</th>
                                <th scope="col" className='baseColor'>Reporting Manager</th>
                                { crudActions ? <th scope="col" className="baseColor">Actions</th> : ""}
                                </tr>
                            </thead>
                            <tbody>
                               {showListOfEmployeesFromState}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
        </div>

         {/* Modal for Add Invoice */}
        <div className="modal fade" id="AddNewInvoice"  role="dialog" aria-labelledby="AddNewInvoice" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="AddNewInvoice">Add New Invoice</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="addNewInvoice" onSubmit={AddNewInvoiceInList}>
            <div className="modal-body">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Invoice Id : </div>
                    </div>
                    <input type="text" className="form-control" id="invoiceid" onChange={(e) => setInputInvoiceId(e.target.value)} placeholder="Enter Invoice Id" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Invoice Date : </div>
                    </div>
                    <input type="date" className="form-control" id="invoiceDate" onChange={(e) => setInputInvoiceDate(e.target.value)} placeholder="Enter Invoice Date"  required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Invoice Amount : </div>
                    </div>
                    <input type="number" className="form-control" id="invoiceAmount" onChange={(e) => setInputInvoiceAmount(e.target.value)} placeholder="Enter Invoice Amount" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Invoice Due Date : </div>
                    </div>
                    <input type="date" className="form-control" id="invoiceDueDate" onChange={(e) => setInputInvoiceDue(e.target.value)} placeholder="Due Date" required/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" id="closeAddInvoiceNow" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn baseBackround btnvtwo">Add Invoice</button>
            </div>
            </form>
            </div>
        </div>
        </div>

        {/* Modal for Add Invoice */}
        <div className="modal fade" id="editNewInvoice"  role="dialog" aria-labelledby="editNewInvoice" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="editNewInvoice">Edit Invoice</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="editNewInvoice" onSubmit={editNewInvoiceInList}>
            <div className="modal-body">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Invoice Id : </div>
                    </div>
                    <input type="text" className="form-control" id="invoiceid" value={inputInvoiceId} onChange={(e) => setInputInvoiceId(parseInt(e.target.value))} placeholder="Enter Invoice Id" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Invoice Date : </div>
                    </div>
                    <input type="date" className="form-control" id="invoiceDate" value={inputInvoiceDate} onChange={(e) => setInputInvoiceDate(e.target.value)} placeholder="Enter Invoice Date"  required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Invoice Amount : </div>
                    </div>
                    <input type="text" className="form-control" id="invoiceeditAmount" value={inputInvoiceAmount} onChange={(e) => setInputInvoiceAmount(parseInt(e.target.value))} placeholder="Enter Invoice Amount" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Invoice Due Date : </div>
                    </div>
                    <input type="date" className="form-control" id="invoiceDueDate" value={inputInvoiceDue} onChange={(e) => setInputInvoiceDue(e.target.value)} placeholder="Due Date" required/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" id="closeEditInvoiceNow" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn baseBackround btnvtwo">Update Invoice</button>
            </div>
            </form>
            </div>
        </div>
        </div>

        {/* Modal for Add Employee */}
        <div className="modal fade" id="addNewEmployee"  role="dialog" aria-labelledby="addNewEmployee" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="addNewEmployee">Add New Employee</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form onSubmit={addNewEmployeeInList} id="addNewEmployeeForm">
            <div className="modal-body">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Employee Name : </div>
                    </div>
                    <input type="text" className="form-control" id="employeeName" onChange={(e) => setInputEmployeeName(e.target.value)} placeholder="Enter Employee Name" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Utilization : </div>
                    </div>
                    <input type="number" className="form-control" id="utilization" min={1} max={100} onChange={(e) => setInputEmployeeUtilization(e.target.value)} placeholder="Enter Utilization in %"  required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Cost / Hr $ : </div>
                    </div>
                    <input type="number" className="form-control" id="costhr" min={1} max={100} onChange={(e) => setInputCostHr(e.target.value)} placeholder="Enter Hourly Cost" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Bill Rate : </div>
                    </div>
                    <input type="number" className="form-control" id="inputBillrate" onChange={(e) => setInputBillRate(e.target.value)} placeholder="Enter Bill Rate" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Reporting Manager : </div>
                    </div>
                    <input type="text" className="form-control" id="inputmanager" onChange={(e) => setInputReportManager(e.target.value)} placeholder="Enter Reporting Manager Email" required/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" id="closeAddNewEmployee" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn baseBackround btnvtwo">Add Employee</button>
            </div>
            </form>
            </div>
        </div>
        </div>

        {/* Modal for Edit Employee */}
        <div className="modal fade" id="editNewEmployee"  role="dialog" aria-labelledby="editNewEmployee" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="editNewEmployee">Edit Employee</h5>
                <button type="button" id="closeEditModalEmployee" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form onSubmit={updateNewEmployeeInList} id="editNewEmployee">
            <div className="modal-body">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Employee Name : </div>
                    </div>
                    <input type="text" className="form-control" id="employeeName" value={inputEmployeeName} onChange={(e) => setInputEmployeeName(e.target.value)} placeholder="Enter Employee Name" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Utilization : </div>
                    </div>
                    <input type="number" className="form-control" id="utilization" min={1} max={100} value={inputEmployeeUtilization} onChange={(e) => setInputEmployeeUtilization(e.target.value)} placeholder="Enter Utilization in %"  required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Cost / Hr $ : </div>
                    </div>
                    <input type="number" className="form-control" id="costhr" value={inputCostHr} min={1} max={100} onChange={(e) => setInputCostHr(e.target.value)} placeholder="Enter Hourly Cost" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Bill Rate : </div>
                    </div>
                    <input type="number" className="form-control" id="inputBillrate" value={inputBillRate} onChange={(e) => setInputBillRate(e.target.value)} placeholder="Enter Bill Rate" required/>
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Reporting Manager : </div>
                    </div>
                    <input type="text" className="form-control" id="inputmanager" value={inputReportManager} onChange={(e) => setInputReportManager(e.target.value)} placeholder="Enter Reporting Manager Email" required/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" id="closeEditNewEmployeeNow" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn baseBackround btnvtwo">Update Employee</button>
            </div>
            </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default ProjectDetails;