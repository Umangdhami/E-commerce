import React, { useEffect, useState } from 'react';
import { hideOverlay, showOverlay } from '../common/common';

const Users = () => {
    const [editUserModel, setEditUserModel] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // useEffect(() => {

    //     if (editUserModel) {
    //       showOverlay()
    //     } else {
    //       hideOverlay()
    //     }
    //   }, [editUserModel])

    return (
        <>
            {/* Modal */}
            {editUserModel && (
                <div className="model-background p-5" style={{overflow : 'scroll'}}>
                    <div>
                        <div className="model-edit-user modal-dialog modal-dialog-centered modal-lg model-edit-user">
                            <div className="modal-content">
                                <div className="modal-header pb-5">
                                    <h5 className="modal-title" id="editUserModalLabel">Edit user</h5>
                                    <button onClick={() => setEditUserModel(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="js-nav-scroller hs-nav-scroller-horizontal">
                                        <span className="hs-nav-scroller-arrow-prev" style={{ display: 'none' }}>
                                            <a className="hs-nav-scroller-arrow-link" href="javascript:;"><i className="bi-chevron-left" /></a>
                                        </span>
                                        <span className="hs-nav-scroller-arrow-next" style={{ display: 'none' }}>
                                            <a className="hs-nav-scroller-arrow-link" href="javascript:;"><i className="bi-chevron-right" /></a>
                                        </span>
                                        <ul className="js-tabs-to-dropdown nav nav-segment nav-fill mb-5" id="editUserModalTab" role="tablist">
                                            <li className="nav-item">
                                                <a className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabChange('profile')} data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-selected={activeTab === 'profile'}>
                                                    <i className="bi-person me-1" /> Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={`nav-link ${activeTab === 'billing-address' ? 'active' : ''}`} onClick={() => handleTabChange('billing-address')} data-bs-toggle="tab" data-bs-target="#billing-address" role="tab" aria-selected={activeTab === 'billing-address'}>
                                                    <i className="bi-building me-1" /> Billing address
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={`nav-link ${activeTab === 'change-password' ? 'active' : ''}`} onClick={() => handleTabChange('change-password')} data-bs-toggle="tab" data-bs-target="#change-password" role="tab" aria-selected={activeTab === 'change-password'}>
                                                    <i className="bi-shield-lock me-1" /> Change password
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => handleTabChange('notifications')} data-bs-toggle="tab" data-bs-target="#notifications" role="tab" aria-selected={activeTab === 'notifications'}>
                                                    <i className="bi-bell me-1" /> Notifications
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="editUserModalTabContent">
                                        {/* Render content based on activeTab */}
                                        <div className="tab-pane fade show active" role="tabpanel" style={{ display: `${activeTab == 'profile' ? 'block' : 'none'}` }}>
                                            <form>
                                                <div className="profile-cover">
                                                    <div className="profile-cover-img-wrapper">
                                                        <img id="editProfileCoverImgModal" className="profile-cover-img" src="assets/img/1920x400/img1.jpg" alt="Image Description" />
                                                        <div className="profile-cover-content profile-cover-uploader p-3">
                                                            <input type="file" className="js-file-attach profile-cover-uploader-input" id="editProfileCoverUplaoderModal" data-hs-file-attach-options='{"textTarget": "#editProfileCoverImgModal","mode": "image","targetAttr": "src","allowTypes": [".png", ".jpeg", ".jpg"]}' />
                                                            <label className="profile-cover-uploader-label btn btn-sm btn-white" htmlFor="editProfileCoverUplaoderModal">
                                                                <i className="bi-camera-fill" />
                                                                <span className="d-none d-sm-inline-block ms-1">Upload header</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <label className="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar mb-5" htmlFor="editAvatarUploaderModal">
                                                    <img id="editAvatarImgModal" className="avatar-img" src="assets/img/160x160/img9.jpg" alt="Image Description" />
                                                    <input type="file" className="js-file-attach avatar-uploader-input" id="editAvatarUploaderModal" data-hs-file-attach-options='{"textTarget": "#editAvatarImgModal","mode": "image","targetAttr": "src","allowTypes": [".png", ".jpeg", ".jpg"]}' />
                                                    <span className="avatar-uploader-trigger">
                                                        <i className="bi-pencil-fill avatar-uploader-icon shadow-sm" />
                                                    </span>
                                                </label>
                                                <div className="row mb-4">
                                                    <label htmlFor="editFirstNameModalLabel" className="col-sm-3 col-form-label form-label">Full name <i className="tio-help-outlined text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group input-group-sm-vertical">
                                                            <input type="text" className="form-control" name="editFirstNameModal" id="editFirstNameModalLabel" placeholder="Your first name" aria-label="Your first name" defaultValue="Ella" />
                                                            <input type="text" className="form-control" name="editLastNameModal" id="editLastNameModalLabel" placeholder="Your last name" aria-label="Your last name" defaultValue="Lauda" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="editEmailModalLabel" className="col-sm-3 col-form-label form-label">Email</label>
                                                    <div className="col-sm-9">
                                                        <input type="email" className="form-control" name="editEmailModal" id="editEmailModalLabel" placeholder="Email" aria-label="Email" defaultValue="ella@site.com" />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="editPhoneLabel" className="col-sm-3 col-form-label form-label">Phone <span className="form-label-secondary">(Optional)</span></label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group input-group-sm-vertical">
                                                            <input type="text" className="js-masked-input form-control" name="phone" id="editPhoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" defaultValue="1(609)972-22-22" data-hs-mask-options='{"template": "+0(000)000-00-00"}' />
                                                            <div className="tom-select-custom">
                                                                <select className="js-select form-select" autoComplete="off" name="editPhoneSelect" data-hs-tom-select-options='{"searchInDropdown": false,"hideSearch": true}'>
                                                                    <option value="Mobile" selected="">Mobile</option>
                                                                    <option value="Home">Home</option>
                                                                    <option value="Work">Work</option>
                                                                    <option value="Fax">Fax</option>
                                                                    <option value="Direct">Direct</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="editOrganizationModalLabel" className="col-sm-3 col-form-label form-label">Organization</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" name="editOrganizationModal" id="editOrganizationModalLabel" placeholder="Your organization" aria-label="Your organization" defaultValue="Htmlstream" />
                                                    </div>
                                                </div>

                                                <div className="row mb-4">
                                                    <label htmlFor="editDepartmentModalLabel" className="col-sm-3 col-form-label form-label">Department</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" name="editDepartmentModal" id="editDepartmentModalLabel" placeholder="Your department" aria-label="Your department" />
                                                    </div>
                                                </div>

                                                <div className="row mb-4">
                                                    <label className="col-sm-3 col-form-label form-label">Account type</label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group input-group-sm-vertical">
                                                            <label className="form-control" htmlFor="editUserModalAccountTypeModalRadio1">
                                                                <span className="form-check">
                                                                    <input type="radio" className="form-check-input" name="editUserModalAccountTypeModalRadio" id="editUserModalAccountTypeModalRadio1" defaultChecked="" />
                                                                    <span className="form-check-label">Individual</span>
                                                                </span>
                                                            </label>
                                                            <label className="form-control" htmlFor="editUserModalAccountTypeModalRadio2">
                                                                <span className="form-check">
                                                                    <input type="radio" className="form-check-input" name="editUserModalAccountTypeModalRadio" id="editUserModalAccountTypeModalRadio2" />
                                                                    <span className="form-check-label">Company</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-end">
                                                    <div className="d-flex gap-3">
                                                        <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="tab-pane fade show active" role="tabpanel" style={{ display: `${activeTab == 'billing-address' ? 'block' : 'none'}` }}>
                                            <form>
                                                <div className="row mb-4">
                                                    <label htmlFor="editLocationModalLabel" className="col-sm-3 col-form-label form-label">Location</label>
                                                    <div className="col-sm-9">
                                                        <div className="tom-select-custom mb-4">
                                                            <select className="js-select form-select" id="editLocationModalLabel" autoComplete="off" data-hs-tom-select-options='{"placeholder": "Select country"}'>
                                                                <option value="WF" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="assets/vendor/flag-icon-css/flags/1x1/wf.svg" alt="Wallis and Futuna Flag" /><span class="text-truncate">Wallis and Futuna</span></span>'>Wallis and Futuna</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-4"><input type="text" className="form-control" name="editCityModal" id="editCityModalLabel" placeholder="City" aria-label="City" defaultValue="London" /></div>
                                                        <input type="text" className="form-control" name="editStateModal" id="editStateModalLabel" placeholder="State" aria-label="State" />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="editAddressLine1Label" className="col-sm-3 col-form-label form-label">Address line 1</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" name="addressLine1" id="editAddressLine1Label" placeholder="Your address" aria-label="Your address" defaultValue="45 Roker Terrace, Latheronwheel" />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="editAddressLine2ModalLabel" className="col-sm-3 col-form-label form-label">Address line 2 <span className="form-label-secondary">(Optional)</span></label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" name="editAddressLine2Modal" id="editAddressLine2ModalLabel" placeholder="Your address" aria-label="Your address" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label htmlFor="editZipCodeLabel" className="col-sm-3 col-form-label form-label">Zip code <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="You can find your code in a postal address." /></label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="js-input-mask form-control" name="zipCode" id="editZipCodeLabel" placeholder="Your zip code" aria-label="Your zip code" defaultValue="KW5 8NW" data-hs-mask-options='{"mask": "AA0 0AA"}' />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-grid gap-3">
                                                    <label className="row form-check form-switch" htmlFor="editUserModalBillingPreferencesSwitch1">
                                                        <span className="col-8 col-sm-9 ms-0">
                                                            <span className="d-block text-dark mb-1">Default billing address</span>
                                                            <span className="d-block fs-5 text-muted">Set as default billing address</span>
                                                        </span>
                                                        <span className="col-4 col-sm-3 text-end">
                                                            <input type="checkbox" className="form-check-input" id="editUserModalBillingPreferencesSwitch1" defaultChecked="" />
                                                        </span>
                                                    </label>
                                                    <label className="row form-check form-switch" htmlFor="editUserModalBillingPreferencesSwitch2">
                                                        <span className="col-8 col-sm-9 ms-0">
                                                            <span className="d-block text-dark mb-1">See info about people who view my profile</span>
                                                            <span className="d-block fs-5 text-muted"><a className="link" href="#">More about viewer info</a>.</span>
                                                        </span>
                                                        <span className="col-4 col-sm-3 text-end">
                                                            <input type="checkbox" className="form-check-input" id="editUserModalBillingPreferencesSwitch2" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-end mt-4">
                                                    <div className="d-flex gap-3">
                                                        <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="tab-pane fade show active" role="tabpanel" style={{ display: `${activeTab == 'change-password' ? 'block' : 'none'}` }}>
                                            <form>
                                                <div className="row mb-4">
                                                    <label htmlFor="editUserModalCurrentPasswordLabel" className="col-sm-3 col-form-label form-label">Current password</label>
                                                    <div className="col-sm-9">
                                                        <div className="input-group input-group-merge">
                                                            <input type="password" className="js-toggle-password form-control" name="currentPassword" id="editUserModalCurrentPasswordLabel" placeholder="Enter current password" aria-label="Enter current password" data-hs-toggle-password-options='{"target": "#editUserModalChangePassModalTarget", "defaultClass": "bi-eye-slash", "showClass": "bi-eye", "classChangeTarget": "#editUserModalChangePassModalIcon"}' />
                                                            <a id="editUserModalChangePassModalTarget" className="input-group-append input-group-text" href="javascript:;"><i id="editUserModalChangePassModalIcon" className="bi-eye" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="editUserModalNewPassword" className="col-sm-3 col-form-label form-label">New password</label>
                                                    <div className="col-sm-9">
                                                        <input type="password" className="js-toggle-password form-control" name="editUserModalNewPassword" id="editUserModalNewPassword" placeholder="Enter new password" aria-label="Enter new password" data-hs-toggle-password-options='{"target": "#editUserModalChangePassModalCheckbox"}' />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <label htmlFor="editUserModalConfirmNewPasswordLabel" className="col-sm-3 col-form-label form-label">Confirm new password</label>
                                                    <div className="col-sm-9">
                                                        <input type="password" className="js-toggle-password form-control" name="confirmNewPassword" id="editUserModalConfirmNewPasswordLabel" placeholder="Confirm your new password" aria-label="Confirm your new password" data-hs-toggle-password-options='{"target": "#editUserModalChangePassModalCheckbox"}' />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col-sm-9 offset-sm-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue="" id="editUserModalChangePassModalCheckbox" />
                                                            <label className="form-check-label" htmlFor="editUserModalChangePassModalCheckbox">Show password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <div className="d-flex gap-3">
                                                        <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="tab-pane fade show active" role="tabpanel" style={{ display: `${activeTab == 'notifications' ? 'block' : 'none'}` }}>
                                            <div className="table-responsive datatable-custom">
                                                <table className="table table-thead-bordered table-nowrap table-align-middle table-first-col-px-0">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th>Type</th>
                                                            <th className="text-center">
                                                                <div className="mb-1">
                                                                    <img className="avatar avatar-xs" src="assets/svg/illustrations/oc-email-at.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                    <img className="avatar avatar-xs" src="assets/svg/illustrations-light/oc-email-at.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                </div>
                                                                Email
                                                            </th>
                                                            <th className="text-center">
                                                                <div className="mb-1">
                                                                    <img className="avatar avatar-xs" src="assets/svg/illustrations/oc-globe.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                    <img className="avatar avatar-xs" src="assets/svg/illustrations-light/oc-globe.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                </div>
                                                                Browser
                                                            </th>
                                                            <th className="text-center">
                                                                <div className="mb-1">
                                                                    <img className="avatar avatar-xs" src="assets/svg/illustrations/oc-phone.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                    <img className="avatar avatar-xs" src="assets/svg/illustrations-light/oc-phone.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                </div>
                                                                App
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>New for you</td>
                                                            <td className="text-center">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="editUserModalAlertsCheckbox1" />
                                                                    <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox1" />
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="editUserModalAlertsCheckbox2" />
                                                                    <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox2" />
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="editUserModalAlertsCheckbox3" />
                                                                    <label className="form-check-label" htmlFor="editUserModalAlertsCheckbox3" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="mb-4">
                                                        <span className="d-block mb-2">When should we send notifications?</span>
                                                        <div className="tom-select-custom">
                                                            <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options='{"searchInDropdown": false, "width": "15rem", "hideSearch": true}'>
                                                                <option value="whenToSendNotification1">Always</option>
                                                                <option value="whenToSendNotification2">Only when I'm online</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="mb-4">
                                                        <span className="d-block mb-2">Send a daily summary ("Daily Digest") of task activity.</span>
                                                        <div className="row">
                                                            <div className="col-auto mb-2">
                                                                <div className="tom-select-custom">
                                                                    <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options='{"searchInDropdown": false, "hideSearch": true}'>
                                                                        <option value="EveryDay">Every day</option>
                                                                        <option value="weekdays" selected="">Weekdays</option>
                                                                        <option value="Never">Never</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto mb-2">
                                                                <div className="tom-select-custom tom-select-custom-end">
                                                                    <select className="js-select form-select" autoComplete="off" data-hs-tom-select-options='{"searchInDropdown": false, "hideSearch": true, "dropdownWidth": "11rem", "dropup": true}'>
                                                                        <option value={0}>at 12 AM</option>
                                                                        <option value={1}>at 1 AM</option>
                                                                        <option value={2}>at 2 AM</option>
                                                                        <option value={3}>at 3 AM</option>
                                                                        <option value={4}>at 4 AM</option>
                                                                        <option value={5}>at 5 AM</option>
                                                                        <option value={6}>at 6 AM</option>
                                                                        <option value={7}>at 7 AM</option>
                                                                        <option value={8}>at 8 AM</option>
                                                                        <option value={9} selected="">at 9 AM</option>
                                                                        <option value={10}>at 10 AM</option>
                                                                        <option value={11}>at 11 AM</option>
                                                                        <option value={12}>at 12 PM</option>
                                                                        <option value={13}>at 1 PM</option>
                                                                        <option value={14}>at 2 PM</option>
                                                                        <option value={15}>at 3 PM</option>
                                                                        <option value={16}>at 4 PM</option>
                                                                        <option value={17}>at 5 PM</option>
                                                                        <option value={18}>at 6 PM</option>
                                                                        <option value={19}>at 7 PM</option>
                                                                        <option value={20}>at 8 PM</option>
                                                                        <option value={21}>at 9 PM</option>
                                                                        <option value={22}>at 10 PM</option>
                                                                        <option value={23}>at 11 PM</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>In order to cut back on noise, email notifications are grouped together and only sent when you're idle or offline.</p>
                                            <div className="d-flex justify-content-end">
                                                <div className="d-flex gap-3">
                                                    <button type="button" className="btn btn-white" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="main">
                <div className="content container-fluid">
                    <div>
                        <div className="page-header">
                            <div className="row align-items-end">
                                <div className="col-sm mb-2 mb-sm-0">
                                    <h1 className="page-header-title">Users</h1>
                                </div>
                                <div className="col-sm-auto">
                                    <a className="btn btn-primary" href="users-add-user.html">
                                        <i className="bi-person-plus-fill me-1" /> Add user
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2">Total users</h6>
                                        <div className="row align-items-center gx-2">
                                            <div className="col">
                                                <span className="display-4 text-dark">24</span>
                                                <span className="text-body fs-5 ms-1">from 22</span>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 5.0%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2">Active members</h6>
                                        <div className="row align-items-center gx-2">
                                            <div className="col">
                                                <span className="display-4 text-dark">12</span>
                                                <span className="text-body fs-5 ms-1">from 11</span>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge bg-soft-success text-success p-1">
                                                    <i className="bi-graph-up" /> 1.2%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2">New/returning</h6>
                                        <div className="row align-items-center gx-2">
                                            <div className="col">
                                                <span className="display-4 text-dark">56</span>
                                                <span className="display-4 text-dark">%</span>
                                                <span className="text-body fs-5 ms-1">from 48.7</span>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge bg-soft-danger text-danger p-1">
                                                    <i className="bi-graph-down" /> 2.8%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-2">Active members</h6>
                                        <div className="row align-items-center gx-2">
                                            <div className="col">
                                                <span className="display-4 text-dark">28.6</span>
                                                <span className="display-4 text-dark">%</span>
                                                <span className="text-body fs-5 ms-1">from 28.6%</span>
                                            </div>
                                            <div className="col-auto">
                                                <span className="badge bg-soft-secondary text-secondary p-1">
                                                    0.0%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header card-header-content-md-between">
                            <form className="mb-2 mb-md-0">
                                <div className="input-group input-group-merge input-group-flush">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search" />
                                    </div>
                                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                </div>
                            </form>
                            <div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
                                <div id="datatableCounterInfo" style={{ display: 'none' }}>
                                    <div className="d-flex align-items-center">
                                        <span className="fs-5 me-3">
                                            <span id="datatableCounter">0</span> Selected
                                        </span>
                                        <button className="btn btn-outline-danger btn-sm">
                                            <i className="bi-trash" /> Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button onClick={() => setActiveTab(activeTab === 'export' ? false : 'export')} className="btn btn-white btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                        <i className="bi-download me-2" /> Export
                                    </button>
                                    <div className={`dropdown-menu dropdown-menu-sm-end ${activeTab == 'export' ? 'show' : ''}`}>
                                        <span className="dropdown-header">Options</span>
                                        <button className="dropdown-item">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="assets/svg/illustrations/copy-icon.svg" alt="Copy" /> Copy
                                        </button>
                                        <button className="dropdown-item">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="assets/svg/illustrations/print-icon.svg" alt="Print" /> Print
                                        </button>
                                        <div className="dropdown-divider" />
                                        <span className="dropdown-header">Download options</span>
                                        <button className="dropdown-item">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="assets/svg/brands/excel-icon.svg" alt="Excel" /> Excel
                                        </button>
                                        <button className="dropdown-item">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="assets/svg/components/placeholder-csv-format.svg" alt="CSV" /> .CSV
                                        </button>
                                        <button className="dropdown-item">
                                            <img className="avatar avatar-xss avatar-4x3 me-2" src="assets/svg/brands/pdf-icon.svg" alt="PDF" /> PDF
                                        </button>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button onClick={() => setActiveTab(activeTab === 'filter' ? false : 'filter')} className="btn btn-white btn-sm w-100" id="usersFilterDropdown">
                                        <i className="bi-filter me-1" /> Filter
                                        <span className="badge bg-soft-dark text-dark rounded-circle ms-1">2</span>
                                    </button>
                                    <div className={`dropdown-menu dropdown-menu-sm-end dropdown-card card-dropdown-filter-centered ${activeTab == 'filter' ? 'show' : ''}`} style={{ minWidth: "22rem", position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(0px, 40px)" }}>

                                        <div className="card">
                                            <div className="card-header card-header-content-between">
                                                <h5 className="card-header-title">Filter users</h5>
                                                <button onClick={() => setActiveTab(false)} type="button" className="btn btn-ghost-secondary btn-icon btn-sm ms-2">
                                                    <i className="bi-x-lg" />
                                                </button>
                                            </div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="mb-4">
                                                        <small className="text-cap text-body">Role</small>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" id="usersFilterCheckAll" defaultChecked />
                                                                    <label className="form-check-label" htmlFor="usersFilterCheckAll">All</label>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" id="usersFilterCheckEmployee" />
                                                                    <label className="form-check-label" htmlFor="usersFilterCheckEmployee">Employee</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm mb-4">
                                                            <small className="text-cap text-body">Position</small>
                                                            <div className="tom-select-custom">
                                                                <select className="js-select form-select form-select-sm">
                                                                    <option value="">Any</option>
                                                                    <option value="Accountant">Accountant</option>
                                                                    <option value="Co-founder">Co-founder</option>
                                                                    <option value="Designer">Designer</option>
                                                                    <option value="Developer">Developer</option>
                                                                    <option value="Director">Director</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm mb-4">
                                                            <small className="text-cap text-body">Status</small>
                                                            <div className="tom-select-custom">
                                                                <select className="js-select form-select form-select-sm">
                                                                    <option value="">Any status</option>
                                                                    <option value="Completed">Completed</option>
                                                                    <option value="In progress">In progress</option>
                                                                    <option value="To do">To do</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mb-4">
                                                            <span className="text-cap text-body">Location</span>
                                                            <div className="tom-select-custom">
                                                                <select className="js-select form-select">
                                                                    <option value="AF">Afghanistan</option>
                                                                    <option value="AX">Aland Islands</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-grid">
                                                        <a className="btn btn-primary" href="javascript:;">Apply</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="table-responsive datatable-custom">
                            <table className="table table-lg table-borderless table-thead-bordered table-nowrap">
                                <thead className="thead-light">
                                    <tr>
                                        <th className="table-column-pe-0">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="datatableCheckAll" />
                                            </div>
                                        </th>
                                        <th className="table-column-ps-0">Name</th>
                                        <th>Position</th>
                                        <th>Country</th>
                                        <th>Status</th>
                                        <th>Portfolio</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr> <tr>
                                        <td className="table-column-pe-0">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="datatableCheckAll1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="datatableCheckAll1"
                                                />
                                            </div>
                                        </td>
                                        <td className="table-column-ps-0">
                                            <a
                                                className="d-flex align-items-center"
                                                href="user-profile.html"
                                            >
                                                <div className="avatar avatar-circle">
                                                    <img
                                                        className="avatar-img"
                                                        src="assets/img/160x160/img10.jpg"
                                                        alt="Amanda Harvey"
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        Amanda Harvey{" "}
                                                        <i
                                                            className="bi-patch-check-fill text-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Top endorsed"
                                                        />
                                                    </span>
                                                    <span className="d-block fs-5 text-body">
                                                        amanda@site.com
                                                    </span>
                                                </div>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="d-block h5 mb-0">Director</span>
                                            <span className="d-block fs-5">Human resources</span>
                                        </td>
                                        <td>United Kingdom</td>
                                        <td>
                                            <span className="legend-indicator bg-success" />
                                            Active
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 me-2">72%</span>
                                                <div className="progress table-progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "72%" }}
                                                        aria-valuenow={72}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Employee</td>
                                        <td>
                                            <button
                                                className="btn btn-white btn-sm"
                                                onClick={() => setEditUserModel(true)}
                                            >
                                                <i className="bi-pencil-fill me-1" /> Edit
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                                <div className="col-sm mb-2 mb-sm-0">
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">Showing:</span>
                                        <select className="form-select form-select-borderless w-auto">
                                            <option value={10}>10</option>
                                            <option value={15}>15</option>
                                            <option value={20}>20</option>
                                        </select>
                                        <span className="text-secondary me-2">of</span>
                                        <span id="datatableWithPaginationInfoTotalQty" />
                                    </div>
                                </div>
                                <div className="col-sm-auto">
                                    <nav id="datatablePagination" aria-label="Activity pagination">
                                        <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                                            <ul id="datatable_pagination" class="pagination datatable-custom-pagination">
                                                <li class="paginate_item page-item disabled">
                                                    <a class="paginate_button previous page-link" aria-controls="datatable" data-dt-idx="0" tabindex="0" id="datatable_previous">
                                                        <span aria-hidden="true">Prev</span>
                                                    </a>
                                                </li>
                                                <li class="paginate_item page-item active">
                                                    <a class="paginate_button page-link" aria-controls="datatable" data-dt-idx="1" tabindex="0">1</a>
                                                </li>
                                                <li class="paginate_item page-item">
                                                    <a class="paginate_button page-link" aria-controls="datatable" data-dt-idx="2" tabindex="0">2</a>
                                                </li>
                                                <li class="paginate_item page-item">
                                                    <a class="paginate_button next page-link" aria-controls="datatable" data-dt-idx="3" tabindex="0" id="datatable_next">
                                                        <span aria-hidden="true">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
