var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "ScaleMP",
        hw_model: "vSMP Foundation with PowerEdge M610 (Intel Xeon X5570, 2.93 GHz)",
        base_copies: "255",
        hw_ncores: "128",
        hw_nchips: "32",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "3150",
        peakmean: "Not Run",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090828-08458.html"
      },
      {
        test_sponsor: "ScaleMP",
        hw_model: "vSMP Foundation (Intel Xeon X5570, see notes)",
        base_copies: "64",
        hw_ncores: "32",
        hw_nchips: "8",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "830",
        peakmean: "Not Run",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090514-07479.html"
      },
      {
        test_sponsor: "ScaleMP",
        hw_model: "vSMP Foundation (Intel Xeon X5650, 2.66 GHz)",
        base_copies: "768",
        hw_ncores: "768",
        hw_nchips: "128",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "1",
        basemean: "13600",
        peakmean: "Not Run",
        htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110606-16926.html"
      },
      {
        test_sponsor: "ScaleMP",
        hw_model: "vSMP Foundation (AMD Opteron 6172, 2.10 GHz)",
        base_copies: "192",
        hw_ncores: "192",
        hw_nchips: "16",
        hw_ncoresperchip: "12",
        hw_nthreadspercore: "1",
        basemean: "2170",
        peakmean: "Not Run",
        htmllink: "https://www.spec.org/cpu2006/results/res2011q4/cpu2006-20110925-18600.html"
      },
    ]
  }
});
