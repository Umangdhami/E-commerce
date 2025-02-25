import React, { useState } from 'react'
import LineChartProgress from '../Components/Charts/Leaderboard/LineChartProgress';

const UserLiderboard = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="main">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row align-items-end">
                            <div className="col-sm mb-2 mb-sm-0">
                                <h1 className="page-header-title">Leaderboard</h1>
                            </div>
                            <div className="col-sm-auto">
                                <ul className="nav nav-segment" id="leaderboardTab" role="tablist">
                                    <li className="nav-item">
                                        <button
                                            className={`bg-transparent border-0 nav-link ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}
                                            id="all-time-tab"
                                            data-bs-toggle="tab"
                                            href="#all-time"
                                            role="tab"
                                        >
                                            All time
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`bg-transparent border-0 nav-link ${activeTab === 'weekly' ? 'active' : ''}`} onClick={() => handleTabChange('weekly')}
                                            id="weekly-tab"
                                            data-bs-toggle="tab"
                                            href="#weekly"
                                            role="tab"
                                        >
                                            Weekly
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`bg-transparent border-0 nav-link ${activeTab === 'monthly' ? 'active' : ''}`} onClick={() => handleTabChange('monthly')}
                                            id="monthly-tab"
                                            data-bs-toggle="tab"
                                            href="#monthly"
                                            role="tab"
                                        >
                                            Monthly
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card overflow-hidden">
                        <div className="tab-content" id="leaderboardTabContent">
                            <div style={{ display: `${activeTab == 'all' ? 'block' : 'none'}` }}
                                className="tab-pane fade show active"
                            >
                                <div className="table-responsive">
                                    <table className="table table-borderless table-thead-bordered table-nowrap table-text-center table-align-middle card-table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col" style={{ width: "2rem" }}>
                                                    Rank
                                                </th>
                                                <th scope="col" className="table-text-start">
                                                    Name
                                                </th>
                                                <th scope="col">Closed issues</th>
                                                <th scope="col">Completed projects</th>
                                                <th scope="col">Progress</th>
                                                <th scope="col">Efficiency rate</th>
                                                <th scope="col">Hours</th>
                                                <th scope="col">Avg. Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="text-warning"
                                                        style={{ fontSize: "1.5rem" }}
                                                    >
                                                        🥇
                                                    </span>
                                                </td>
                                                <td className="table-text-start">
                                                    <a
                                                        className="d-flex align-items-center"
                                                        href="user-profile.html"
                                                    >
                                                        <div className="avatar avatar-circle">
                                                            <img
                                                                className="avatar-img"
                                                                src="assets/img/160x160/img10.jpg"
                                                                alt="Image Description"
                                                            />
                                                        </div>
                                                        <div className="ms-3">
                                                            <span className="d-block h5 text-inherit mb-0">
                                                                Amanda Harvey
                                                            </span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>20</td>
                                                <td>35</td>
                                                <td>
                                                    <div
                                                        className="chartjs-custom"
                                                        style={{ height: "2rem", width: "6rem" }}
                                                    >
                                                        <LineChartProgress />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-soft-success text-success p-1">
                                                        <i className="bi-graph-up" /> 1.5%
                                                    </span>
                                                </td>
                                                <td>505</td>
                                                <td>
                                                    <i className="bi-star-fill text-warning me-1" /> 4.97
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div style={{ display: `${activeTab == 'weekly' ? 'block' : 'none'}` }}
                                className="tab-pane fade show active"
                                id="weekly"
                                role="tabpanel"
                                aria-labelledby="weekly-tab"
                            >
                                <div className="table-responsive">
                                    <table className="table table-borderless table-thead-bordered table-nowrap table-text-center table-align-middle card-table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col" style={{ width: "2rem" }}>
                                                    Rank
                                                </th>
                                                <th scope="col" className="table-text-start">
                                                    Name
                                                </th>
                                                <th scope="col">Closed issues</th>
                                                <th scope="col">Projects</th>
                                                <th scope="col">Progress</th>
                                                <th scope="col">Efficiency rate</th>
                                                <th scope="col">Hours</th>
                                                <th scope="col">Avg. Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="text-warning"
                                                        style={{ fontSize: "1.5rem" }}
                                                    >
                                                        🥇
                                                    </span>
                                                </td>
                                                <td className="table-text-start">
                                                    <a
                                                        className="d-flex align-items-center"
                                                        href="user-profile.html"
                                                    >
                                                        <div className="avatar avatar-circle">
                                                            <img
                                                                className="avatar-img"
                                                                src="assets/img/160x160/img10.jpg"
                                                                alt="Image Description"
                                                            />
                                                        </div>
                                                        <div className="ms-3">
                                                            <span className="d-block h5 text-inherit mb-0">
                                                                Amanda Harvey
                                                            </span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>56</td>
                                                <td>35</td>
                                                <td>
                                                    <div
                                                        className="chartjs-custom"
                                                        style={{ height: "2rem", width: "6rem" }}
                                                    >
                                                        <LineChartProgress />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-soft-success text-success p-1">
                                                        <i className="bi-graph-up" /> 3.9%
                                                    </span>
                                                </td>
                                                <td>505</td>
                                                <td>
                                                    <i className="bi-star-fill text-warning me-1" /> 4.80
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* End Table */}
                            </div>
                            <div style={{ display: `${activeTab == 'monthly' ? 'block' : 'none'}` }}
                                className="tab-pane fade show active"
                                id="monthly"
                                role="tabpanel"
                                aria-labelledby="monthly-tab"
                            >
                                <div className="table-responsive">
                                    <table className="table table-borderless table-thead-bordered table-nowrap table-text-center table-align-middle card-table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col" style={{ width: "2rem" }}>
                                                    Rank
                                                </th>
                                                <th scope="col" className="table-text-start">
                                                    Name
                                                </th>
                                                <th scope="col">Closed issues</th>
                                                <th scope="col">Completed projects</th>
                                                <th scope="col">Progress</th>
                                                <th scope="col">Efficiency rate</th>
                                                <th scope="col">Hours</th>
                                                <th scope="col">Avg. Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span
                                                        className="text-warning"
                                                        style={{ fontSize: "1.5rem" }}
                                                    >
                                                        🥇
                                                    </span>
                                                </td>
                                                <td className="table-text-start">
                                                    <a
                                                        className="d-flex align-items-center"
                                                        href="user-profile.html"
                                                    >
                                                        <div className="avatar avatar-soft-info avatar-circle">
                                                            <span className="avatar-initials">L</span>
                                                        </div>
                                                        <div className="ms-3">
                                                            <span className="d-block h5 text-inherit mb-0">
                                                                Lori Hunter
                                                            </span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>45</td>
                                                <td>31</td>
                                                <td>
                                                    <div
                                                        className="chartjs-custom"
                                                        style={{ height: "2rem", width: "6rem" }}
                                                    >
                                                        <LineChartProgress />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-soft-success text-success p-1">
                                                        <i className="bi-graph-up" /> 0.5%
                                                    </span>
                                                </td>
                                                <td>460</td>
                                                <td>
                                                    <i className="bi-star-fill text-warning me-1" /> 4.72
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserLiderboard