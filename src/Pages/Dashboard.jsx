import React from 'react'
import BubbleChart from '../Components/Charts/Dashboards/BubbleChart'
import BarChart from '../Components/Charts/Dashboards/BarChart'
import LineChartUser from '../Components/Charts/Dashboards/LineChartUser'
import LineChartSession from '../Components/Charts/Dashboards/LineChartSession'
import LineChartAdmin from '../Components/Charts/Dashboards/LineChartAdmin'
import LineChartSubAdmin from '../Components/Charts/Dashboards/LineChartSubAdmin'

const Dashboard = () => {

  return (
    <div className='main'>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="page-header-title">Dashboard</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
            <a className="card card-hover-shadow h-100" href="#">
              <div className="card-body">
                <h6 className="card-subtitle">Total Users</h6>
                <div className="row align-items-center gx-2 mb-1">
                  <div className="col-6">
                    <h2 className="card-title text-inherit">72,540</h2>
                  </div>
                  <div className="col-6">
                    <div className="chartjs-custom" style={{ height: "3rem" }}>
                      <LineChartUser />
                    </div>
                  </div>
                </div>
                <span className="badge bg-soft-success text-success">
                  <i className="bi-graph-up" /> 12.5%
                </span>
                <span className="text-body fs-6 ms-1">from 70,104</span>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
            <a className="card card-hover-shadow h-100" href="#">
              <div className="card-body">
                <h6 className="card-subtitle">Sessions</h6>
                <div className="row align-items-center gx-2 mb-1">
                  <div className="col-6">
                    <h2 className="card-title text-inherit">29.4%</h2>
                  </div>
                  <div className="col-6">
                    <div className="chartjs-custom" style={{ height: "3rem" }}>
                      <LineChartSession />
                    </div>
                  </div>
                </div>
                <span className="badge bg-soft-success text-success">
                  <i className="bi-graph-up" /> 1.7%
                </span>
                <span className="text-body fs-6 ms-1">from 29.1%</span>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
            <a className="card card-hover-shadow h-100" href="#">
              <div className="card-body">
                <h6 className="card-subtitle">Avg. Click Rate</h6>
                <div className="row align-items-center gx-2 mb-1">
                  <div className="col-6">
                    <h2 className="card-title text-inherit">56.8%</h2>
                  </div>
                  <div className="col-6">
                    <div className="chartjs-custom" style={{ height: "3rem" }}>
                      <LineChartAdmin />
                    </div>
                  </div>
                </div>
                <span className="badge bg-soft-danger text-danger">
                  <i className="bi-graph-down" /> 4.4%
                </span>
                <span className="text-body fs-6 ms-1">from 61.2%</span>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
            <a className="card card-hover-shadow h-100" href="#">
              <div className="card-body">
                <h6 className="card-subtitle">Pageviews</h6>
                <div className="row align-items-center gx-2 mb-1">
                  <div className="col-6">
                    <h2 className="card-title text-inherit">92,913</h2>
                  </div>
                  <div className="col-6">
                    <div className="chartjs-custom" style={{ height: "3rem" }}>
                      <LineChartSubAdmin />
                    </div>
                  </div>
                </div>
                <span className="badge bg-soft-secondary text-body">0.0%</span>
                <span className="text-body fs-6 ms-1">from 2,913</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card h-100">
              <div className="card-header card-header-content-sm-between">
                <h4 className="card-header-title mb-2 mb-sm-0">Monthly expenses</h4>
                <ul className="nav nav-segment nav-fill" id="expensesTab" role="tablist">
                  <li className="nav-item" data-bs-toggle="chart-bar" data-datasets="thisWeek" data-trigger="click" data-action="toggle">
                    <button className="nav-link active" >
                      This week
                    </button>
                  </li>
                  <li className="nav-item" data-bs-toggle="chart-bar" data-datasets="lastWeek" data-trigger="click" data-action="toggle">
                    <button className="nav-link" >
                      Last week
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-sm mb-2 mb-sm-0">
                    <div className="d-flex align-items-center">
                      <span className="h1 mb-0">35%</span>
                      <span className="text-success ms-2">
                        <i className="bi-graph-up" /> 25.3%
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-auto align-self-sm-end">
                    <div className="row fs-6 text-body">
                      <div className="col-auto">
                        <span className="legend-indicator bg-primary" /> New
                      </div>
                      <div className="col-auto">
                        <span className="legend-indicator" /> Overdue
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chartjs-custom">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 mb-lg-5">
          <div className="card-header">
            <div className="row justify-content-between align-items-center flex-grow-1">
              <div className="col-md">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-header-title">Users</h4>
                  <div id="datatableCounterInfo" style={{ display: "none" }}>
                    <div className="d-flex align-items-center">
                      <span className="fs-6 me-3">
                        <span id="datatableCounter">0</span>
                        Selected
                      </span>
                      <button className="btn btn-outline-danger btn-sm" >
                        <i className="tio-delete-outlined" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="row align-items-sm-center">
                  <div className="col-sm-auto">
                    <div className="row align-items-center gx-0">
                      <div className="col">
                        <span className="text-secondary me-2">Status:</span>
                      </div>
                      <div className="col-auto">
                        <div className="tom-select-custom tom-select-custom-end">
                          <select
                            className="js-select js-datatable-filter form-select form-select-sm form-select-borderless"
                            data-target-table="datatable"
                            defaultValue={'-1'}
                          >
                            <option value="-1">All</option>
                            <option value="successful">Successful</option>
                            <option value="overdue">Overdue</option>
                            <option value="pending">Pending</option>
                          </select>

                          <select
                            className="js-select js-datatable-filter form-select form-select-sm form-select-borderless"
                            data-target-column-index={2}
                            data-target-table="datatable"
                            autoComplete="off"
                            defaultValue={'all'}
                            data-hs-tom-select-options='{"searchInDropdown": false,"hideSearch": true,"dropdownWidth": "10rem"}'
                          >
                            <option value="all" >All</option>
                            <option value="successful">Successful</option>
                            <option value="overdue">Overdue</option>
                            <option value="pending">Pending</option>
                          </select>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <div className="row align-items-center gx-0">
                      <div className="col">
                        <span className="text-secondary me-2">Signed up:</span>
                      </div>
                      <div className="col-auto">
                        <div className="tom-select-custom tom-select-custom-end">
                          <select
                            className="js-select js-datatable-filter form-select form-select-sm form-select-borderless"
                            data-target-column-index={5}
                            data-target-table="datatable"
                            autoComplete="off"
                            defaultValue={'All'}
                            data-hs-tom-select-options='{"searchInDropdown": false,"hideSearch": true,"dropdownWidth": "10rem"}'
                          >
                            <option value="All" >All</option>
                            <option value="1 year ago">1 year ago</option>
                            <option value="6 months ago">6 months ago</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <form>
                      <div className="input-group input-group-merge input-group-flush">
                        <div className="input-group-prepend input-group-text">
                          <i className="bi-search" />
                        </div>
                        <input
                          id="datatableSearch"
                          type="search"
                          className="form-control"
                          placeholder="Search users"
                          aria-label="Search users"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive datatable-custom">
            <table
              id="datatable"
              className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
              data-hs-datatables-options='{"columnDefs": [{"targets": [0, 1, 4],"orderable": false}],"order": [],"info": {"totalQty": "#datatableWithPaginationInfoTotalQty"},"search": "#datatableSearch","entries": "#datatableEntries","pageLength": 8,"isResponsive": false,"isShowPaging": false,"pagination": "datatablePagination"}'
            >
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="table-column-pe-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="datatableCheckAll"
                      />
                      <label className="form-check-label" htmlFor="datatableCheckAll" />
                    </div>
                  </th>
                  <th className="table-column-ps-0">Full name</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th>Email</th>
                  <th>Signed up</th>
                  <th>User ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-column-pe-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="usersDataCheck2"
                      />
                      <label className="form-check-label" htmlFor="usersDataCheck2" />
                    </div>
                  </td>
                  <td className="table-column-ps-0">
                    <a className="d-flex align-items-center" href="user-profile.html">
                      <div className="flex-shrink-0">
                        <div className="avatar avatar-sm avatar-circle">
                          <img
                            className="avatar-img"
                            src="src/assets/img/160x160/img10.jpg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="text-inherit mb-0">
                          Amanda Harvey{" "}
                          <i
                            className="bi-patch-check-fill text-primary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Top endorsed"
                          />
                        </h5>
                      </div>
                    </a>
                  </td>
                  <td>
                    <span className="legend-indicator bg-success" />
                    Successful
                  </td>
                  <td>Unassigned</td>
                  <td>amanda@site.com</td>
                  <td>1 year ago</td>
                  <td>67989</td>
                </tr>
                <tr>
                  <td className="table-column-pe-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="usersDataCheck4"
                      />
                      <label className="form-check-label" htmlFor="usersDataCheck4" />
                    </div>
                  </td>
                  <td className="table-column-ps-0">
                    <a className="d-flex align-items-center" href="user-profile.html">
                      <div className="flex-shrink-0">
                        <div className="avatar avatar-sm avatar-circle">
                          <img
                            className="avatar-img"
                            src="src/assets/img/160x160/img3.jpg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="text-inherit mb-0">David Harrison</h5>
                      </div>
                    </a>
                  </td>
                  <td>
                    <span className="legend-indicator bg-danger" />
                    Overdue
                  </td>
                  <td>Non-subscription</td>
                  <td>david@site.com</td>
                  <td>6 months ago</td>
                  <td>55821</td>
                </tr>
                <tr>
                  <td className="table-column-pe-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="usersDataCheck5"
                      />
                      <label className="form-check-label" htmlFor="usersDataCheck5" />
                    </div>
                  </td>
                  <td className="table-column-ps-0">
                    <a className="d-flex align-items-center" href="user-profile.html">
                      <div className="flex-shrink-0">
                        <div className="avatar avatar-sm avatar-circle">
                          <img
                            className="avatar-img"
                            src="src/assets/img/160x160/img5.jpg"
                            alt="Image Description"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="text-inherit mb-0">Finch Hoot</h5>
                      </div>
                    </a>
                  </td>
                  <td>
                    <span className="legend-indicator bg-warning" />
                    Pending
                  </td>
                  <td>Subscription</td>
                  <td>finch@site.com</td>
                  <td>1 year ago</td>
                  <td>85214</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
              <div className="col-sm mb-2 mb-sm-0">
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                  <span className="me-2">Showing:</span>
                  <div className="tom-select-custom">
                    <select
                      id="datatableEntries"
                      className="js-select form-select form-select-borderless w-auto"
                      autoComplete="off"
                      defaultValue={1}
                      data-hs-tom-select-options='{"searchInDropdown": false,"hideSearch": true}'
                    >
                      <option value={1}>All</option>
                      <option value={4}>4</option>
                      <option value={6}>6</option>
                      <option value={8} >8</option>
                      <option value={12}>12</option>
                    </select>
                  </div>
                  <span className="text-secondary me-2">of</span>
                  <span id="datatableWithPaginationInfoTotalQty" />
                </div>
              </div>
              <div className="col-sm-auto">
                <div className="d-flex justify-content-center justify-content-sm-end">
                  <nav
                    id="datatablePagination"
                    aria-label="Activity pagination"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="card h-100">
              <div className="card-header card-header-content-sm-between">
                <h4 className="card-header-title mb-2 mb-sm-0">Transactions</h4>
                <button id="js-daterangepicker-predefined" className="btn btn-ghost-secondary btn-sm dropdown-toggle">
                  <i className="bi-calendar-week" />
                  <span className="js-daterangepicker-predefined-preview ms-1" />
                </button>
              </div>
              <div className="card-body">
                <div className="chartjs-custom mx-auto" style={{ height: "20rem" }}><BubbleChart /></div>
                <div className="row justify-content-center">
                  <div className="col-auto"><span className="legend-indicator bg-primary" /> New</div>
                  <div className="col-auto"><span className="legend-indicator" style={{ backgroundColor: "#7000f2" }} /> Pending</div>
                  <div className="col-auto"><span className="legend-indicator bg-info" /> Failed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-header card-header-content-between">
                <h4 className="card-header-title">Reports overview</h4>
                <div className="dropdown">
                  <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="reportsOverviewDropdown1">
                    <span className="dropdown-header">Settings</span>
                    <a className="dropdown-item" href="#"><i className="bi-share-fill dropdown-item-icon" /> Share reports</a>
                    <a className="dropdown-item" href="#"><i className="bi-download dropdown-item-icon" /> Download</a>
                    <a className="dropdown-item" href="#"><i className="bi-alt dropdown-item-icon" /> Connect other apps</a>
                    <div className="dropdown-divider" />
                    <span className="dropdown-header">Feedback</span>
                    <a className="dropdown-item" href="#"><i className="bi-chat-left-dots dropdown-item-icon" /> Report</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <span className="h1 d-block mb-4">$7,431.14 USD</span>
                <div className="progress rounded-pill mb-2">
                  <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="Gross value" />
                  <div className="progress-bar opacity-50" role="progressbar" style={{ width: "33%" }} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="Net volume from sales" />
                  <div className="progress-bar opacity-25" role="progressbar" style={{ width: "9%" }} aria-valuenow={9} aria-valuemin={0} aria-valuemax={100} data-bs-toggle="tooltip" data-bs-placement="top" title="New volume from sales" />
                </div>
                <div className="d-flex justify-content-between mb-4"><span>0%</span><span>100%</span></div>
                <div className="table-responsive">
                  <table className="table table-lg table-nowrap card-table mb-0">
                    <tbody>
                      <tr><th scope="row"><span className="legend-indicator bg-primary" /> Gross value</th><td>$3,500.71</td><td><span className="badge bg-soft-success text-success">+12.1%</span></td></tr>
                      <tr><th scope="row"><span className="legend-indicator bg-primary opacity-50" /> Net volume from sales</th><td>$2,980.45</td><td><span className="badge bg-soft-warning text-warning">+6.9%</span></td></tr>
                      <tr><th scope="row"><span className="legend-indicator bg-primary opacity-25" /> New volume from sales</th><td>$950.00</td><td><span className="badge bg-soft-danger text-danger">-1.5%</span></td></tr>
                      <tr><th scope="row"><span className="legend-indicator" /> Other</th><td>32</td><td><span className="badge bg-soft-success text-success">1.9%</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard