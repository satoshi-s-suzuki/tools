var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "FORMAT",
        hw_model: "FORMAT R1520ML",
        base_copies: "4",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "72.9",
        peakmean: "79.1",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q4/cpu2006-20081013-05576.html"
      },
      {
        test_sponsor: "FORMAT",
        hw_model: "FORMAT R1520ML (2.5 GHz Intel Xeon X3320)",
        base_copies: "4",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "60.9",
        peakmean: "64.2",
        htmllink: "https://www.spec.org/cpu2006/results/res2008q4/cpu2006-20081105-05841.html"
      },
      {
        test_sponsor: "FORMAT",
        hw_model: "Format R2625URLX (Intel Xeon E5520, 2.26 GHz)",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "181",
        peakmean: "194",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090619-07945.html"
      },
      {
        test_sponsor: "FORMAT",
        hw_model: "Format P5600LX (Intel Xeon E5520, 2.26 GHz)",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "183",
        peakmean: "189",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090620-07950.html"
      },
    ]
  }
});
