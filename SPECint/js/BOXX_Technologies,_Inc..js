var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "BOXX Technologies, Inc.",
        hw_model: "3DBOXX WORKSTATION 8450SE Special Edition",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "164",
        peakmean: "179",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q4/cpu2006-20081110-05925.html"
      },
      {
        test_sponsor: "BOXX Technologies, Inc.",
        hw_model: "3DBOXX WORKSTATION 8400",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "151",
        peakmean: "162",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q4/cpu2006-20081110-05926.html"
      },
      {
        test_sponsor: "BOXX Technologies, Inc.",
        hw_model: "3DBOXX WORKSTATION 8550 EXXTREME",
        base_copies: "24",
        hw_ncores: "12",
        hw_nchips: "2",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "2",
        basemean: "418",
        peakmean: "447",
        htmllink: "https://www.spec.org/cpu2006/results/res2010q4/cpu2006-20101108-13719.html"
      },
    ]
  }
});
