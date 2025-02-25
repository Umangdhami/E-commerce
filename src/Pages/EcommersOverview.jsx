import React from 'react'
import BarSalesChart from '../Components/Charts/Ecommerce/Overview/BarSalesChart'
import productImg from '../assets/img/ecommerce/oc-megaphone.svg'
import discountImg from '../assets/img/ecommerce/oc-discount.webp'
import LazyImage from '../Components/LazyLoad/LazyImage'
import LineSalesChart from '../Components/Charts/Ecommerce/Overview/LineSalesChart'
import LineVisitorChart from '../Components/Charts/Ecommerce/Overview/LineVisitorChart'
import LineOrderChart from '../Components/Charts/Ecommerce/Overview/LineOrderChart'
import LineRefundChart from '../Components/Charts/Ecommerce/Overview/LineRefundChart'

const EcommersOverview = () => {
  return (
    <div className="main">
    {/* Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-sm mb-2 mb-sm-0">
            <h1 className="page-header-title">Good morning, Mark.</h1>
            <p className="page-header-text">
              Here's what's happening with your store today.
            </p>
          </div>
          {/* End Col */}
        </div>
      </div>
      {/* End Page Header */}
      {/* Card */}
      <div className="card card-body mb-3 mb-lg-5">
        <div className="row col-lg-divider gx-lg-6">
          <div className="col-lg-3">
            {/* Media */}
            <div className="d-flex">
              <div className="flex-grow-1">
                <h6 className="card-subtitle mb-3">In-store Sales</h6>
                <h3 className="card-title">$7,820.75</h3>
                <div className="d-flex align-items-center">
                  <span className="d-block fs-6">5k orders</span>
                  <span className="badge bg-soft-success text-success ms-2">
                    <i className="bi-graph-up" /> 4.3%
                  </span>
                </div>
              </div>
              <span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
                <i className="bi-shop" />
              </span>
            </div>
            {/* End Media */}
          </div>
          {/* End Col */}
          <div className="col-lg-3">
            {/* Media */}
            <div className="d-flex">
              <div className="flex-grow-1">
                <h6 className="card-subtitle mb-3">Website Sales</h6>
                <h3 className="card-title">$985,937.45</h3>
                <div className="d-flex align-items-center">
                  <span className="d-block fs-6">21k orders</span>
                  <span className="badge bg-soft-success text-success ms-2">
                    <i className="bi-graph-up" /> 12.5%
                  </span>
                </div>
              </div>
              <span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
                <i className="bi-layout-text-window-reverse" />
              </span>
            </div>
            {/* End Media */}
          </div>
          {/* End Col */}
          <div className="col-lg-3">
            {/* Media */}
            <div className="d-flex">
              <div className="flex-grow-1">
                <h6 className="card-subtitle mb-3">Discount</h6>
                <h3 className="card-title">$15,503.00</h3>
                <div className="d-flex align-items-center">
                  <span className="d-block fs-6">6k orders</span>
                </div>
              </div>
              <span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
                <i className="bi-percent" />
              </span>
            </div>
            {/* End Media */}
          </div>
          {/* End Col */}
          <div className="col-lg-3">
            {/* Media */}
            <div className="d-flex">
              <div className="flex-grow-1">
                <h6 className="card-subtitle mb-3">Affiliate</h6>
                <h3 className="card-title">$3,982.53</h3>
                <div className="d-flex align-items-center">
                  <span className="d-block fs-6">150 orders</span>
                  <span className="badge bg-soft-danger text-danger ms-2">
                    <i className="bi-graph-down" /> 4.4%
                  </span>
                </div>
              </div>
              <span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
                <i className="bi-people" />
              </span>
            </div>
            {/* End Media */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="card mb-3 mb-lg-5">
        {/* Header */}
        <div className="card-header card-header-content-sm-between">
          <h4 className="card-header-title mb-2 mb-sm-0">
            Sales{" "}
            <i
              className="bi-question-circle text-body ms-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."
            />
          </h4>
          <div className="d-grid d-sm-flex gap-2">
            {/* Select */}
            <div className="tom-select-custom">
              <select
                className="js-select form-select form-select-sm"
                autoComplete="off"
                data-hs-tom-select-options='{
                    "searchInDropdown": false,
                    "hideSearch": true,
                    "dropdownWidth": "10rem"
                  }'
              >
                <option value="online-store">Online store</option>
                <option value="in-store">In-store</option>
              </select>
            </div>
            {/* End Select */}
            {/* Daterangepicker */}
            <button
              id="js-daterangepicker-predefined"
              className="btn btn-white btn-sm dropdown-toggle"
            >
              <i className="bi-calendar-week" />
              <span className="js-daterangepicker-predefined-preview ms-1" >12</span>
            </button>
            {/* End Daterangepicker */}
          </div>
        </div>
        {/* End Header */}
        {/* Body */}
        <div className="card-body">
          <div className="row col-lg-divider">
            <div className="col-lg-9 mb-5 mb-lg-0">
              {/* Bar Chart */}
              <div className="chartjs-custom mb-4" style={{height : '240px'}}>
                <BarSalesChart />
              </div>
              {/* End Bar Chart */}
              <div className="row justify-content-center">
                <div className="col-auto">
                  <span className="legend-indicator" /> Revenue
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <span className="legend-indicator bg-primary" /> Orders
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col-sm-6 col-lg-12">
                  {/* Stats */}
                  <div
                    className="d-flex justify-content-center flex-column"
                    style={{ minHeight: "9rem" }}
                  >
                    <h6 className="card-subtitle">Revenue</h6>
                    <span className="d-block display-4 text-dark mb-1 me-3">
                      $97,458.20
                    </span>
                    <span className="d-block text-success">
                      <i className="bi-graph-up me-1" /> $2,401.02 (3.7%)
                    </span>
                  </div>
                  {/* End Stats */}
                  <hr className="d-none d-lg-block my-0" />
                </div>
                {/* End Col */}
                <div className="col-sm-6 col-lg-12">
                  {/* Stats */}
                  <div
                    className="d-flex justify-content-center flex-column"
                    style={{ minHeight: "9rem" }}
                  >
                    <h6 className="card-subtitle">Orders</h6>
                    <span className="d-block display-4 text-dark mb-1 me-3">
                      67,893
                    </span>
                    <span className="d-block text-danger">
                      <i className="bi-graph-down me-1" /> +3,301 (1.2%)
                    </span>
                  </div>
                  {/* End Stats */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Body */}
      </div>
      {/* End Card */}
      <div className="row">
        <div className="col-lg-4 mb-3 mb-lg-5">
          <div className="d-grid gap-2 gap-lg-4">
            {/* Card */}
            <a className="card card-hover-shadow" href="#">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <LazyImage
                      className="avatar avatar-lg avatar-4x3"
                      src={productImg}
                      alt="Image Description"
                      style={{ minHeight: "5rem" }}
                      data-hs-theme-appearance="default"
                    />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h3 className="text-inherit mb-1">Product</h3>
                    <span className="text-body">Create a new product</span>
                  </div>
                  <div className="ms-2 text-end">
                    <i className="bi-chevron-right text-body text-inherit" />
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a className="card card-hover-shadow" href="#">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <LazyImage
                      className="avatar avatar-lg avatar-4x3"
                      src={discountImg}
                      alt="Image Description"
                      style={{ minHeight: "5rem" }}
                      data-hs-theme-appearance="default"
                    />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h3 className="text-inherit mb-1">Discount</h3>
                    <span className="text-body">Create a new discount</span>
                  </div>
                  <div className="ms-2 text-end">
                    <i className="bi-chevron-right text-body text-inherit" />
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
        </div>
        {/* End Col */}
        <div className="col-lg-8 mb-3 mb-lg-5">
          {/* Card */}
          <div className="card h-100">
            {/* Header */}
            <div className="card-header card-header-content-between">
              <h4 className="card-header-title">Top products</h4>
              <a className="btn btn-ghost-secondary btn-sm" href="#">
                View all
              </a>
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="card-body-height">
              {/* Table */}
              <div className="table-responsive">
                <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Change</th>
                      <th scope="col">Price</th>
                      <th scope="col">Sold</th>
                      <th scope="col">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {/* Media */}
                        <a
                          className="d-flex align-items-center"
                          href="ecommerce-product-details.html"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="avatar"
                              src="assets/img/400x400/img4.jpg"
                              alt="Image Description"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="text-inherit mb-0">
                              Photive wireless speakers
                            </h5>
                          </div>
                        </a>
                        {/* End Media */}
                      </td>
                      <td>
                        <i className="bi-graph-down text-danger me-1" /> 72%
                      </td>
                      <td>$65</td>
                      <td>7,545</td>
                      <td>
                        <h4 className="mb-0">$15,302.00</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {/* Media */}
                        <a
                          className="d-flex align-items-center"
                          href="ecommerce-product-details.html"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="avatar"
                              src="assets/img/400x400/img26.jpg"
                              alt="Image Description"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="text-inherit mb-0">
                              Topman shoe in green
                            </h5>
                          </div>
                        </a>
                        {/* End Media */}
                      </td>
                      <td>
                        <i className="bi-graph-up text-success me-1" /> 69%
                      </td>
                      <td>$21</td>
                      <td>6,643</td>
                      <td>
                        <h4 className="mb-0">$12,492.21</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {/* Media */}
                        <a
                          className="d-flex align-items-center"
                          href="ecommerce-product-details.html"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="avatar"
                              src="assets/img/400x400/img25.jpg"
                              alt="Image Description"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="text-inherit mb-0">
                              RayBan black sunglasses
                            </h5>
                          </div>
                        </a>
                        {/* End Media */}
                      </td>
                      <td>
                        <i className="bi-graph-down text-danger me-1" /> 65%
                      </td>
                      <td>$37</td>
                      <td>5,951</td>
                      <td>
                        <h4 className="mb-0">$10,351.71</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {/* Media */}
                        <a
                          className="d-flex align-items-center"
                          href="ecommerce-product-details.html"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="avatar"
                              src="assets/img/400x400/img6.jpg"
                              alt="Image Description"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="text-inherit mb-0">
                              Mango Women's shoe
                            </h5>
                          </div>
                        </a>
                        {/* End Media */}
                      </td>
                      <td>
                        <i className="bi-graph-down text-danger me-1" /> 53%
                      </td>
                      <td>$65</td>
                      <td>5,002</td>
                      <td>
                        <h4 className="mb-0">$9,917.45</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {/* Media */}
                        <a
                          className="d-flex align-items-center"
                          href="ecommerce-product-details.html"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="avatar"
                              src="assets/img/400x400/img3.jpg"
                              alt="Image Description"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="text-inherit mb-0">
                              Calvin Klein t-shirts
                            </h5>
                          </div>
                        </a>
                        {/* End Media */}
                      </td>
                      <td>
                        <i className="bi-graph-up text-success me-1" /> 50%
                      </td>
                      <td>$89</td>
                      <td>4,714</td>
                      <td>
                        <h4 className="mb-0">$8,466.02</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {/* Media */}
                        <a
                          className="d-flex align-items-center"
                          href="ecommerce-product-details.html"
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="avatar"
                              src="assets/img/400x400/img5.jpg"
                              alt="Image Description"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="text-inherit mb-0">
                              Givenchy perfume
                            </h5>
                          </div>
                        </a>
                        {/* End Media */}
                      </td>
                      <td>
                        <i className="bi-graph-up text-success me-1" /> 50%
                      </td>
                      <td>$99</td>
                      <td>4,155</td>
                      <td>
                        <h4 className="mb-0">$7,715.89</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* End Table */}
            </div>
            {/* End Body */}
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
      {/* Card */}
     
      {/* End Card */}
      {/* Card */}
      <div className="card">
        <div className="row col-lg-divider">
          <div className="col-lg-6">
            {/* Body */}
            <div className="card-body">
              <h4>
                Total sales{" "}
                <i
                  className="bi-question-circle text-body ms-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."
                />
              </h4>
              <div className="row align-items-sm-center mt-4 mt-sm-0 mb-5">
                <div className="col-sm mb-3 mb-sm-0">
                  <span className="display-5 text-dark me-2">$597,820.75</span>
                </div>
                {/* End Col */}
                <div className="col-sm-auto">
                  <span className="h3 text-success">
                    <i className="bi-graph-up" /> 25.9%
                  </span>
                  <span className="d-block">
                    — 1,347,935 orders{" "}
                    <span className="badge bg-soft-dark text-dark rounded-pill ms-1">
                      +$97k today
                    </span>
                  </span>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
              {/* Bar Chart */}
              <div className="chartjs-custom mb-4" style={{ height: "18rem" }}>
               <LineSalesChart />
              </div>
              {/* End Bar Chart */}
              {/* Legend Indicators */}
              <div className="row justify-content-center">
                <div className="col-auto">
                  <span className="legend-indicator" /> Yesterday
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <span className="legend-indicator bg-primary" /> Today
                </div>
                {/* End Col */}
              </div>
              {/* End Legend Indicators */}
            </div>
            {/* End Body */}
          </div>
          {/* End Col */}
          <div className="col-lg-6">
            {/* Body */}
            <div className="card-body">
              <h4>Visitors</h4>
              <div className="row align-items-sm-center mt-4 mt-sm-0 mb-5">
                <div className="col-sm mb-3 mb-sm-0">
                  <span className="display-5 text-dark me-2">831,071</span>
                </div>
                {/* End Col */}
                <div className="col-sm-auto">
                  <span className="h3 text-danger">
                    <i className="bi-graph-down" /> 16%
                  </span>
                  <span className="d-block">
                    — 467,001 unique{" "}
                    <span className="badge bg-soft-dark text-dark rounded-pill ms-1">
                      +7k today
                    </span>
                  </span>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
              {/* Bar Chart */}
              <div className="chartjs-custom mb-4" style={{ height: "18rem" }}>
                <LineVisitorChart />
              </div>
              {/* End Bar Chart */}
              {/* Legend Indicators */}
              <div className="row justify-content-center">
                <div className="col-auto">
                  <span className="legend-indicator" /> Yesterday
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <span className="legend-indicator bg-primary" /> Today
                </div>
                {/* End Col */}
              </div>
              {/* End Legend Indicators */}
            </div>
            {/* End Body */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <hr />
        <div className="row col-lg-divider">
          <div className="col-lg-6">
            {/* Body */}
            <div className="card-body">
              <h4>Total orders</h4>
              <div className="row align-items-sm-center mt-4 mt-sm-0 mb-5">
                <div className="col-sm mb-3 mb-sm-0">
                  <span className="display-5 text-dark me-2">1,348,935</span>
                </div>
                {/* End Col */}
                <div className="col-sm-auto">
                  <span className="h3 text-success">
                    <i className="bi-graph-up" /> 4.7%
                  </span>
                  <span className="d-block">
                    — orders over time{" "}
                    <span className="badge bg-soft-dark text-dark rounded-pill ms-1">
                      +5k today
                    </span>
                  </span>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
              {/* Bar Chart */}
              <div className="chartjs-custom mb-4" style={{ height: "18rem" }}>
                <LineOrderChart />
              </div>
              {/* End Bar Chart */}
              {/* Legend Indicators */}
              <div className="row justify-content-center">
                <div className="col-auto">
                  <span className="legend-indicator" /> Yesterday
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <span className="legend-indicator bg-primary" /> Today
                </div>
                {/* End Col */}
              </div>
              {/* End Legend Indicators */}
            </div>
            {/* End Body */}
          </div>
          {/* End Col */}
          <div className="col-lg-6">
            {/* Body */}
            <div className="card-body">
              <h4>Refunded</h4>
              <div className="row align-items-sm-center mt-4 mt-sm-0 mb-5">
                <div className="col-sm mb-3 mb-sm-0">
                  <span className="display-5 text-dark me-2">52,441</span>
                </div>
                {/* End Col */}
                <div className="col-sm-auto">
                  <span className="h3 text-success">
                    <i className="bi-graph-up" /> 11%
                  </span>
                  <span className="d-block">
                    — refunds over time{" "}
                    <span className="badge bg-soft-dark text-dark rounded-pill ms-1">
                      +21 today
                    </span>
                  </span>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
              {/* Bar Chart */}
              <div className="chartjs-custom mb-4" style={{ height: "18rem" }}>
                <LineRefundChart />
              </div>
              {/* End Bar Chart */}
              {/* Legend Indicators */}
              <div className="row justify-content-center">
                <div className="col-auto">
                  <span className="legend-indicator" /> Yesterday
                </div>
                {/* End Col */}
                <div className="col-auto">
                  <span className="legend-indicator bg-primary" /> Today
                </div>
                {/* End Col */}
              </div>
              {/* End Legend Indicators */}
            </div>
            {/* End Body */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Card */}
    </div>
    {/* End Content */}
    {/* Footer */}
  </div>
  
  )
}

export default EcommersOverview