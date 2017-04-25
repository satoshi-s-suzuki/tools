var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "J.P Sa Couto S.A.",
        hw_model: "TSUNAMI Tidal S6016BUB server system (Intel Xeon X5520)",
        base_copies: "1",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "25.5",
        peakmean: "Not Run",
        htmllink: "https://www.spec.org/cpu2006/results/res2010q4/cpu2006-20101206-13869.html"
      },
      {
        test_sponsor: "J.P Sa Couto S.A.",
        hw_model: "TSUNAMI Tidal S6026RF server system (Intel Xeon X5620)",
        base_copies: "1",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "25.1",
        peakmean: "Not Run",
        htmllink: "https://www.spec.org/cpu2006/results/res2010q4/cpu2006-20101206-13870.html"
      },
    ]
  }
});
