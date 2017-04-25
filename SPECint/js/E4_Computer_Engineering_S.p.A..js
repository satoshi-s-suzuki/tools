var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "E4 Computer Engineering S.p.A.",
        hw_model: "E-Rack Twin E7116",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "208",
        peakmean: "221",
        htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110328-15191.html"
      },
      {
        test_sponsor: "E4 Computer Engineering S.p.A.",
        hw_model: "E-Rack Twin E7116",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "225",
        peakmean: "235",
        htmllink: "https://www.spec.org/cpu2006/results/res2011q3/cpu2006-20110728-17776.html"
      },
      {
        test_sponsor: "E4 Computer Engineering S.p.A.",
        hw_model: "E-Rack 8248, AMD Opteron 6174",
        base_copies: "48",
        hw_ncores: "48",
        hw_nchips: "4",
        hw_ncoresperchip: "12",
        hw_nthreadspercore: "1",
        basemean: "725",
        peakmean: "832",
        htmllink: "https://www.spec.org/cpu2006/results/res2011q4/cpu2006-20110920-18591.html"
      },
    ]
  }
});
