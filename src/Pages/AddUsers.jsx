import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LazyImage from '../Components/LazyLoad/LazyImage';
import image from '../assets/img/user/oc-hi-five.webp'

const AddUsers = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate()
  const [addUser, setAddUser] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="main">
        <div className="content container-fluid">
          <form className="js-step-form py-md-5">
            <div className="row justify-content-lg-center">
              <div className="col-lg-8">
                <ul id="addUserStepFormProgress" style={{ display: `${addUser ? 'none' : 'flex'}` }} className="js-step-progress step step-sm step-icon-sm step step-inline step-item-between mb-3 mb-md-5">
                  <li className="step-item">
                    <a onClick={() => handleTabChange('profile')} className={`${activeTab === 'profile' ? 'active focus' : ''} step-content-wrapper`}>
                      <span className="step-icon step-icon-soft-dark">1</span>
                      <div className="step-content">
                        <span className="step-title">Profile</span>
                      </div>
                    </a>
                  </li>
                  <li className="step-item">
                    <a onClick={() => handleTabChange('billing-address')} className={`${activeTab === 'billing-address' ? 'active focus' : ''} step-content-wrapper`} href="javascript:;">
                      <span className="step-icon step-icon-soft-dark">2</span>
                      <div className="step-content">
                        <span className="step-title">Billing address</span>
                      </div>
                    </a>
                  </li>
                  <li className="step-item">
                    <a onClick={() => handleTabChange('confirmation')} className={`${activeTab === 'confirmation' ? 'active focus' : ''} step-content-wrapper`} href="javascript:;">
                      <span className="step-icon step-icon-soft-dark">3</span>
                      <div className="step-content">
                        <span className="step-title">Confirmation</span>
                      </div>
                    </a>
                  </li>
                </ul>
                <div id="addUserStepFormContent" style={{ display: `${addUser ? 'none' : 'block'}` }}>
                  <div id="addUserStepProfile" className={`card card-lg`} style={{ display: `${activeTab === 'profile' ? 'block' : 'none'}` }}>
                    <div className="card-body">
                      <div className="row mb-4">
                        <label className="col-sm-3 col-form-label form-label">Avatar</label>
                        <div className="col-sm-9">
                          <div className="d-flex align-items-center">
                            <label className="avatar avatar-xl avatar-circle avatar-uploader me-5" htmlFor="avatarUploader">
                              <img id="avatarImg" className="avatar-img" src="assets/img/160x160/img1.jpg" alt="Image Description" />
                              <input type="file" className="js-file-attach avatar-uploader-input" id="avatarUploader" accept=".png, .jpeg, .jpg" />
                              <span className="avatar-uploader-trigger">
                                <i className="bi-pencil avatar-uploader-icon shadow-sm" />
                              </span>
                            </label>
                            <button type="button" className="js-file-attach-reset-img btn btn-white">Delete</button>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-4">
                        <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Full name</label>
                        <div className="col-sm-9">
                          <div className="input-group input-group-sm-vertical">
                            <input type="text" className="form-control" name="firstName" id="firstNameLabel" placeholder="Clarice" />
                            <input type="text" className="form-control" name="lastName" id="lastNameLabel" placeholder="Boone" />
                          </div>
                        </div>
                      </div>

                      <div className="row mb-4">
                        <label htmlFor="emailLabel" className="col-sm-3 col-form-label form-label">Email</label>
                        <div className="col-sm-9">
                          <input type="email" className="form-control" name="email" id="emailLabel" placeholder="clarice@site.com" />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <label htmlFor="phoneLabel" className="col-sm-3 col-form-label form-label">Phone <span className="form-label-secondary">(Optional)</span></label>
                        <div className="col-sm-9">
                          <div className="input-group input-group-sm-vertical">
                            <input type="text" className="js-input-mask form-control" name="phone" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" data-hs-mask-options='{ "mask": "+0(000)000-00-00" }' />
                            <div className="tom-select-custom tom-select-custom-end">
                              <select className="js-select form-select" data-hs-tom-select-options='{ "searchInDropdown": false, "hideSearch": true, "dropdownWidth": "8rem" }'>
                                <option value="Mobile" selected>Mobile</option>
                                <option value="Home">Home</option>
                                <option value="Work">Work</option>
                                <option value="Fax">Fax</option>
                                <option value="Direct">Direct</option>
                              </select>
                            </div>
                          </div>
                          <a className="js-create-field form-link" href="javascript:;"><i className="bi-plus" /> Add phone</a>
                        </div>
                      </div>

                      <div className="row mb-4">
                        <label htmlFor="organizationLabel" className="col-sm-3 col-form-label form-label">Organization</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="organization" id="organizationLabel" placeholder="Htmlstream" />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <label htmlFor="departmentLabel" className="col-sm-3 col-form-label form-label">Department</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="department" id="departmentLabel" placeholder="Human resources" />
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-sm-3 col-form-label form-label">Account type</label>
                        <div className="col-sm-9">
                          <div className="input-group input-group-sm-vertical">
                            <label className="form-control" htmlFor="userAccountTypeRadio1">
                              <span className="form-check">
                                <input type="radio" className="form-check-input" name="userAccountTypeRadio" id="userAccountTypeRadio1" />
                                <span className="form-check-label">Individual</span>
                              </span>
                            </label>
                            <label className="form-control" htmlFor="userAccountTypeRadio2">
                              <span className="form-check">
                                <input type="radio" className="form-check-input" name="userAccountTypeRadio" id="userAccountTypeRadio2" />
                                <span className="form-check-label">Company</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer d-flex justify-content-end align-items-center">
                      <button onClick={() => setActiveTab('billing-address')} type="button" className="btn btn-primary" data-hs-step-form-next-options='{ "targetSelector": "#addUserStepBillingAddress" }'>
                        Next <i className="bi-chevron-right" />
                      </button>
                    </div>
                  </div>

                  <div id="addUserStepBillingAddress" class={`card card-lg`} style={{ display: `${activeTab === 'billing-address' ? 'block' : 'none'}` }}>
                    <div class="card-body">
                      <div class="row mb-4">
                        <label htmlFor="locationLabel" class="col-sm-3 col-form-label form-label">Location</label>
                        <div class="col-sm-9">
                          <div class="tom-select-custom mb-4">
                            <select class="js-select form-select" id="locationLabel">
                              <option value="AF" data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="assets/vendor/flag-icon-css/flags/1x1/af.svg" alt="Afghanistan Flag" /><span class="text-truncate">Afghanistan</span></span>'>Afghanistan</option>
                            </select>
                          </div>
                          <div class="mb-4">
                            <input type="text" class="form-control" name="city" id="cityLabel" placeholder="City" aria-label="City" />
                          </div>
                          <input type="text" class="form-control" name="state" id="stateLabel" placeholder="State" aria-label="State" />
                        </div>
                      </div>
                      <div class="row mb-4">
                        <label htmlFor="addressLine1Label" class="col-sm-3 col-form-label form-label">Address line 1</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" name="addressLine1" id="addressLine1Label" placeholder="Your address" aria-label="Your address" />
                        </div>
                      </div>
                      <div class="js-add-field row mb-4" data-hs-add-field-options='{"template": "#addAddressFieldTemplate", "container": "#addAddressFieldContainer", "defaultCreated": 0}'>
                        <label htmlFor="addressLine2Label" class="col-sm-3 col-form-label form-label">Address line 2 <span class="form-label-secondary">(Optional)</span></label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" name="addressLine2" id="addressLine2Label" placeholder="Your address" aria-label="Your address" />
                          <div id="addAddressFieldContainer" />
                          <a href="javascript:;" class="js-create-field form-link"><i class="bi-plus" /> Add address</a>
                        </div>
                      </div>
                      <div class="row">
                        <label htmlFor="zipCodeLabel" class="col-sm-3 col-form-label form-label">Zip code <i class="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="You can find your code in a postal address." /></label>
                        <div class="col-sm-9">
                          <input type="text" class="js-input-mask form-control" name="zipCode" id="zipCodeLabel" placeholder="Your zip code" aria-label="Your zip code" data-hs-mask-options='{"mask": "AA0 0AA"}' />
                        </div>
                      </div>
                    </div>
                    <div class="card-footer d-flex align-items-center">
                      <button onClick={() => setActiveTab('profile')} type="button" class="btn btn-ghost-secondary">
                        <i class="bi-chevron-left" /> Previous step
                      </button>
                      <div class="ms-auto">
                        <button onClick={() => setActiveTab('confirmation')} type="button" class="btn btn-primary">Next <i class="bi-chevron-right" /></button>
                      </div>
                    </div>
                  </div>

                  <div id="addUserStepConfirmation" class={`card card-lg`} style={{ display: `${activeTab === 'confirmation' ? 'block' : 'none'}` }}>
                    <div class="profile-cover">
                      <div class="profile-cover-img-wrapper">
                        <img class="profile-cover-img" src="assets/img/1920x400/img1.jpg" alt="Image Description" />
                      </div>
                    </div>
                    <div class="avatar avatar-xxl avatar-circle avatar-border-lg profile-cover-avatar">
                      <img class="avatar-img" src="assets/img/160x160/img9.jpg" alt="Image Description" />
                    </div>
                    <div class="card-body">
                      <dl class="row">
                        <dt class="col-sm-6 text-sm-end">Full name:</dt>
                        <dd class="col-sm-6">Ella Lauda</dd>
                        <dt class="col-sm-6 text-sm-end">Email:</dt>
                        <dd class="col-sm-6">ella@site.com</dd>
                        <dt class="col-sm-6 text-sm-end">Phone:</dt>
                        <dd class="col-sm-6">+1 (609) 972-22-22</dd>
                        <dt class="col-sm-6 text-sm-end">Organization:</dt>
                        <dd class="col-sm-6">Htmlstream</dd>
                        <dt class="col-sm-6 text-sm-end">Department:</dt>
                        <dd class="col-sm-6">-</dd>
                        <dt class="col-sm-6 text-sm-end">Account type:</dt>
                        <dd class="col-sm-6">Individual</dd>
                        <dt class="col-sm-6 text-sm-end">Country:</dt>
                        <dd class="col-sm-6">
                          <img class="avatar avatar-xss avatar-circle me-1" src="assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Great Britain Flag" />
                          United Kingdom
                        </dd>
                        <dt class="col-sm-6 text-sm-end">City:</dt>
                        <dd class="col-sm-6">London</dd>
                        <dt class="col-sm-6 text-sm-end">State:</dt>
                        <dd class="col-sm-6">-</dd>
                        <dt class="col-sm-6 text-sm-end">Address line 1:</dt>
                        <dd class="col-sm-6">45 Roker Terrace, Latheronwheel</dd>
                        <dt class="col-sm-6 text-sm-end">Address line 2:</dt>
                        <dd class="col-sm-6">-</dd>
                        <dt class="col-sm-6 text-sm-end">Zip code:</dt>
                        <dd class="col-sm-6">KW5 8NW</dd>
                      </dl>
                    </div>
                    <div class="card-footer d-sm-flex align-items-sm-center">
                      <button onClick={() => setActiveTab('billing-address')} type="button" class="btn btn-ghost-secondary mb-2 mb-sm-0">
                        <i class="bi-chevron-left" /> Previous step
                      </button>
                      <div class="ms-auto">
                        <button type="button" class="btn btn-white me-2">Save in drafts</button>
                        <button onClick={() => setAddUser(true)} type="button" class="btn btn-primary">Add user</button>
                      </div>
                    </div>
                  </div>

                </div>
                <div id="successMessageContent" style={{ display: `${addUser ? 'block' : 'none'}` }}>
                  <div className="text-center">
                    <LazyImage className="img-fluid mb-3" src={image} alt="Image Description" style={{ maxWidth: "15rem" }} />
                    <div className="mb-4">
                      <h2>Successful!</h2>
                      <p>New <span className="fw-semibold text-dark">Ella Lauda</span> user has been successfully created.</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button onClick={() => navigate('/overview')} className="btn btn-white me-3">
                        <i className="bi-chevron-left ms-1" /> Back to users
                      </button>
                      <button  onClick={() => setAddUser(false)} className="btn btn-primary" href="users-add-user.html"><i className="bi-person-plus-fill me-1" /> Add new user</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default AddUsers