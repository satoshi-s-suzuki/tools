var vm = new Vue({
    el: "#app",
    data: {
        system: [
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS1000 (Intel Xeon 5160)",
                base_copies: "4",
                hw_ncores: "4",
                hw_nchips: "2",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "1",
                basemean: "51.8",
                peakmean: "53.8",
                htmllink: "https://www.spec.org/cpu2006/results/res2007q2/cpu2006-20070529-01184.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS1000 (Intel Xeon X5355)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "83.5",
                peakmean: "86.4",
                htmllink: "https://www.spec.org/cpu2006/results/res2007q3/cpu2006-20070803-01630.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5345)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "78.3",
                peakmean: "81.2",
                htmllink: "https://www.spec.org/cpu2006/results/res2007q3/cpu2006-20070803-01631.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5450)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "107",
                peakmean: "133",
                htmllink: "https://www.spec.org/cpu2006/results/res2008q1/cpu2006-20080219-03468.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon X5260)",
                base_copies: "4",
                hw_ncores: "4",
                hw_nchips: "2",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "1",
                basemean: "69.4",
                peakmean: "81.8",
                htmllink: "https://www.spec.org/cpu2006/results/res2008q1/cpu2006-20080219-03475.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS1000 (Intel Xeon X5460)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "111",
                peakmean: "137",
                htmllink: "https://www.spec.org/cpu2006/results/res2008q1/cpu2006-20080219-03479.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 es (Intel Xeon L5320)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "67.9",
                peakmean: "80.6",
                htmllink: "https://www.spec.org/cpu2006/results/res2008q2/cpu2006-20080318-03796.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 es (Intel Xeon L5410)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "91.2",
                peakmean: "112",
                htmllink: "https://www.spec.org/cpu2006/results/res2008q2/cpu2006-20080512-04326.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000 RS440 (Intel Xeon X7350)",
                base_copies: "16",
                hw_ncores: "16",
                hw_nchips: "4",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "176",
                peakmean: "212",
                htmllink: "https://www.spec.org/cpu2006/results/res2008q3/cpu2006-20080902-05230.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon X5570)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "227",
                peakmean: "243",
                htmllink: "https://www.spec.org/cpu2006/results/res2009q1/cpu2006-20090317-06807.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon X5570)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "227",
                peakmean: "243",
                htmllink: "https://www.spec.org/cpu2006/results/res2009q1/cpu2006-20090317-06811.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5502)",
                base_copies: "4",
                hw_ncores: "4",
                hw_nchips: "2",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "1",
                basemean: "65.8",
                peakmean: "71.0",
                htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090828-08439.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon X5670)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "326",
                peakmean: "350",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q2/cpu2006-20100412-10494.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon X5680)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "346",
                peakmean: "370",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q2/cpu2006-20100511-11014.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon X5680)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "348",
                peakmean: "373",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q2/cpu2006-20100525-11373.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000-bd (Intel Core i7-610E)",
                base_copies: "4",
                hw_ncores: "2",
                hw_nchips: "1",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "2",
                basemean: "49.2",
                peakmean: "53.0",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q3/cpu2006-20100608-11622.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000-bd (Intel Core i5-520E)",
                base_copies: "4",
                hw_ncores: "2",
                hw_nchips: "1",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "2",
                basemean: "46.3",
                peakmean: "50.1",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q3/cpu2006-20100608-11630.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5640)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "224",
                peakmean: "238",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q3/cpu2006-20100914-13308.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5620)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "209",
                peakmean: "226",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q3/cpu2006-20100914-13312.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon L5630)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "175",
                peakmean: "190",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q3/cpu2006-20100914-13316.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5503)",
                base_copies: "4",
                hw_ncores: "4",
                hw_nchips: "2",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "1",
                basemean: "72.5",
                peakmean: "77.8",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q3/cpu2006-20100914-13322.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon X7560)",
                base_copies: "128",
                hw_ncores: "64",
                hw_nchips: "8",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "1310",
                peakmean: "1390",
                htmllink: "https://www.spec.org/cpu2006/results/res2010q4/cpu2006-20100928-13505.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon X5670)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "325",
                peakmean: "348",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q1/cpu2006-20101221-13955.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5503)",
                base_copies: "4",
                hw_ncores: "4",
                hw_nchips: "2",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "1",
                basemean: "72.9",
                peakmean: "78.3",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q1/cpu2006-20101221-13947.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5640)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "222",
                peakmean: "238",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q1/cpu2006-20101221-13950.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon L5630)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "174",
                peakmean: "186",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q1/cpu2006-20110104-14037.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon X5690)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "386",
                peakmean: "412",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110315-15078.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon X5690)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "385",
                peakmean: "411",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110329-15364.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon X5675)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "360",
                peakmean: "384",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110329-15365.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon X5675)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "362",
                peakmean: "387",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110411-15556.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5649)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "301",
                peakmean: "322",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110426-15955.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5603)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "118",
                peakmean: "126",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110426-15958.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5649)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "301",
                peakmean: "321",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110426-15961.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5603)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "119",
                peakmean: "127",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q2/cpu2006-20110426-15964.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E7-8870)",
                base_copies: "160",
                hw_ncores: "80",
                hw_nchips: "8",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "1790",
                peakmean: "1920",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q3/cpu2006-20110621-17259.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 2000 (Intel Xeon E7-8870)",
                base_copies: "160",
                hw_ncores: "80",
                hw_nchips: "8",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "1790",
                peakmean: "1920",
                htmllink: "https://www.spec.org/cpu2006/results/res2011q3/cpu2006-20110621-17260.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000-bd (Intel Core i3-2120T)",
                base_copies: "4",
                hw_ncores: "2",
                hw_nchips: "1",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "2",
                basemean: "71.2",
                peakmean: "74.9",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q1/cpu2006-20111219-19190.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000-bd (Intel Xeon E3-1220L)",
                base_copies: "4",
                hw_ncores: "2",
                hw_nchips: "1",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "2",
                basemean: "69.0",
                peakmean: "72.6",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q1/cpu2006-20111219-19191.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000-bd (Intel Xeon E3-1260L)",
                base_copies: "8",
                hw_ncores: "4",
                hw_nchips: "1",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "132",
                peakmean: "138",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q1/cpu2006-20111219-19192.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2680)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "632",
                peakmean: "661",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120327-20715.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2680)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "632",
                peakmean: "661",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120327-20720.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2670)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "612",
                peakmean: "641",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120327-20723.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2670)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "612",
                peakmean: "641",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120327-20724.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5-2690)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "647",
                peakmean: "675",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120410-20955.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 2000 (Intel Xeon E5-2690)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "647",
                peakmean: "675",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120410-20956.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2630L)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "373",
                peakmean: "390",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120410-20960.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2630L)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "373",
                peakmean: "390",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120410-20965.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2603)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "167",
                peakmean: "174",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120410-20967.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2603)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "167",
                peakmean: "174",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120410-20971.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2640)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "443",
                peakmean: "463",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120424-21336.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2640)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "443",
                peakmean: "463",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120424-21338.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5-2603)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "168",
                peakmean: "174",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120424-21345.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 2000 (Intel Xeon E5-2603)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "168",
                peakmean: "174",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120424-21361.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5-2640)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "443",
                peakmean: "462",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120424-21374.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 2000 (Intel Xeon E5-2640)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "443",
                peakmean: "462",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120424-21377.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5-2643)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "356",
                peakmean: "371",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120522-21994.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 2000 (Intel Xeon E5-2643)",
                base_copies: "16",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "356",
                peakmean: "371",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120522-21995.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2620)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "375",
                peakmean: "392",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120522-22274.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2620)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "375",
                peakmean: "392",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120522-22278.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5-2470)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "552",
                peakmean: "575",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120605-22737.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 2000 (Intel Xeon E5-2630L)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "375",
                peakmean: "392",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120605-22747.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5-2630L)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "375",
                peakmean: "392",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120605-22754.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520A (Intel Xeon E5-2470)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "559",
                peakmean: "582",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120605-22742.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520A (Intel Xeon E5-2470)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "559",
                peakmean: "582",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q2/cpu2006-20120605-22744.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520A (Intel Xeon E5-2440)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "419",
                peakmean: "436",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120619-23049.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520A (Intel Xeon E5-2440)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "419",
                peakmean: "436",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120619-23053.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5-2670)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "620",
                peakmean: "646",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120619-23057.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 2000 (Intel Xeon E5-2670)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "620",
                peakmean: "646",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120619-23062.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520A (Intel Xeon E5-2420)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "351",
                peakmean: "367",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120703-23508.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520A (Intel Xeon E5-2420)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "351",
                peakmean: "367",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120703-23513.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5-2440)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "418",
                peakmean: "435",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120717-23772.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5-2470)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "556",
                peakmean: "580",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120717-23774.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520A (Intel Xeon E5-2430L)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "363",
                peakmean: "379",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120730-23969.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5-2420)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "350",
                peakmean: "367",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120730-23975.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520A (Intel Xeon E5-2430L)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "363",
                peakmean: "379",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120730-23982.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5-2430L)",
                base_copies: "24",
                hw_ncores: "12",
                hw_nchips: "2",
                hw_ncoresperchip: "6",
                hw_nthreadspercore: "2",
                basemean: "364",
                peakmean: "379",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120813-24199.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS320 (Intel Xeon E5-2403)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "166",
                peakmean: "173",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120813-24210.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000 (Intel Xeon E5-2690)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "665",
                peakmean: "692",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120813-24215.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 2000 (Intel Xeon E5-2690)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "665",
                peakmean: "692",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120813-24220.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520A (Intel Xeon E5-2403)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "166",
                peakmean: "173",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120828-24366.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520A (Intel Xeon E5-2403)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "166",
                peakmean: "173",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q3/cpu2006-20120828-24372.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS540A (Intel Xeon E5-4650)",
                base_copies: "64",
                hw_ncores: "32",
                hw_nchips: "4",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "1180",
                peakmean: "1230",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q4/cpu2006-20120730-23980.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 540A (Intel Xeon E5-4650)",
                base_copies: "64",
                hw_ncores: "32",
                hw_nchips: "4",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "1180",
                peakmean: "1230",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q4/cpu2006-20120730-23987.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2609)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "216",
                peakmean: "225",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q4/cpu2006-20120813-24189.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2609)",
                base_copies: "8",
                hw_ncores: "8",
                hw_nchips: "2",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "1",
                basemean: "216",
                peakmean: "225",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q4/cpu2006-20120813-24191.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2637)",
                base_copies: "8",
                hw_ncores: "4",
                hw_nchips: "2",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "2",
                basemean: "187",
                peakmean: "195",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q4/cpu2006-20121105-24938.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2637)",
                base_copies: "8",
                hw_ncores: "4",
                hw_nchips: "2",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "2",
                basemean: "187",
                peakmean: "195",
                htmllink: "https://www.spec.org/cpu2006/results/res2012q4/cpu2006-20121105-24941.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "847",
                peakmean: "875",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140210-28443.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2000",
                base_copies: "48",
                hw_ncores: "24",
                hw_nchips: "2",
                hw_ncoresperchip: "12",
                hw_nthreadspercore: "2",
                basemean: "915",
                peakmean: "944",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140210-28444.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Hitachi Compute Blade 2000",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "847",
                peakmean: "875",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140210-28447.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Hitachi Compute Blade 2000",
                base_copies: "48",
                hw_ncores: "24",
                hw_nchips: "2",
                hw_ncoresperchip: "12",
                hw_nthreadspercore: "2",
                basemean: "915",
                peakmean: "944",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140210-28448.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2670 v2)",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "768",
                peakmean: "794",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140310-28962.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2697 v2)",
                base_copies: "48",
                hw_ncores: "24",
                hw_nchips: "2",
                hw_ncoresperchip: "12",
                hw_nthreadspercore: "2",
                basemean: "911",
                peakmean: "939",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140310-28965.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Hitachi Compute Blade 520H (Intel Xeon E5-2670 v2)",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "768",
                peakmean: "794",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140310-28966.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Hitachi Compute Blade 520H (Intel Xeon E5-2697 v2)",
                base_copies: "48",
                hw_ncores: "24",
                hw_nchips: "2",
                hw_ncoresperchip: "12",
                hw_nthreadspercore: "2",
                basemean: "911",
                peakmean: "939",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140310-28969.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520X (Intel Xeon E7-4860 v2)",
                base_copies: "96",
                hw_ncores: "48",
                hw_nchips: "4",
                hw_ncoresperchip: "12",
                hw_nthreadspercore: "2",
                basemean: "1750",
                peakmean: "1800",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q2/cpu2006-20140422-29414.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2690 v2)",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "846",
                peakmean: "874",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q2/cpu2006-20140325-29123.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2650 v2)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "648",
                peakmean: "672",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q2/cpu2006-20140325-29124.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2690 v2)",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "846",
                peakmean: "874",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q2/cpu2006-20140325-29150.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2650 v2)",
                base_copies: "32",
                hw_ncores: "16",
                hw_nchips: "2",
                hw_ncoresperchip: "8",
                hw_nthreadspercore: "2",
                basemean: "648",
                peakmean: "672",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q2/cpu2006-20140325-29151.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520X (Intel Xeon E7-8890 v2)",
                base_copies: "240",
                hw_ncores: "120",
                hw_nchips: "8",
                hw_ncoresperchip: "15",
                hw_nthreadspercore: "2",
                basemean: "4360",
                peakmean: "4500",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q3/cpu2006-20140617-29925.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520X (Intel Xeon E7-8890 v2)",
                base_copies: "240",
                hw_ncores: "120",
                hw_nchips: "8",
                hw_ncoresperchip: "15",
                hw_nthreadspercore: "2",
                basemean: "4360",
                peakmean: "4500",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q3/cpu2006-20140617-29928.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000-bd (Intel Xeon E3-1275L v3)",
                base_copies: "8",
                hw_ncores: "4",
                hw_nchips: "1",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "195",
                peakmean: "202",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141126-33249.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000-bd (Intel Xeon E3-1240L v3)",
                base_copies: "8",
                hw_ncores: "4",
                hw_nchips: "1",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "166",
                peakmean: "171",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141126-33253.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "HA8000-bd (Intel Core i3-4150T)",
                base_copies: "4",
                hw_ncores: "2",
                hw_nchips: "1",
                hw_ncoresperchip: "2",
                hw_nthreadspercore: "2",
                basemean: "95.9",
                peakmean: "98.9",
                htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141126-33257.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2699 v3)",
                base_copies: "72",
                hw_ncores: "36",
                hw_nchips: "2",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "1320",
                peakmean: "1360",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150108-34081.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2699 v3)",
                base_copies: "72",
                hw_ncores: "36",
                hw_nchips: "2",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "1320",
                peakmean: "1360",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150109-34123.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E5-2699 v3)",
                base_copies: "72",
                hw_ncores: "36",
                hw_nchips: "2",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "1320",
                peakmean: "1360",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150109-34125.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E5-2697 v3)",
                base_copies: "56",
                hw_ncores: "28",
                hw_nchips: "2",
                hw_ncoresperchip: "14",
                hw_nthreadspercore: "2",
                basemean: "1170",
                peakmean: "1210",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-34991.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E5-2660 v3)",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "877",
                peakmean: "904",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-34993.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E5-2690 v3)",
                base_copies: "48",
                hw_ncores: "24",
                hw_nchips: "2",
                hw_ncoresperchip: "12",
                hw_nthreadspercore: "2",
                basemean: "1040",
                peakmean: "1080",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-34996.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2697 v3)",
                base_copies: "56",
                hw_ncores: "28",
                hw_nchips: "2",
                hw_ncoresperchip: "14",
                hw_nthreadspercore: "2",
                basemean: "1170",
                peakmean: "1210",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-35003.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2660 v3)",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "877",
                peakmean: "904",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-35005.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520H (Intel Xeon E5-2690 v3)",
                base_copies: "48",
                hw_ncores: "24",
                hw_nchips: "2",
                hw_ncoresperchip: "12",
                hw_nthreadspercore: "2",
                basemean: "1040",
                peakmean: "1080",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-35008.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2697 v3)",
                base_copies: "56",
                hw_ncores: "28",
                hw_nchips: "2",
                hw_ncoresperchip: "14",
                hw_nthreadspercore: "2",
                basemean: "1170",
                peakmean: "1210",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-35015.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2660 v3)",
                base_copies: "40",
                hw_ncores: "20",
                hw_nchips: "2",
                hw_ncoresperchip: "10",
                hw_nthreadspercore: "2",
                basemean: "877",
                peakmean: "904",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-35017.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520H (Intel Xeon E5-2690 v3)",
                base_copies: "48",
                hw_ncores: "24",
                hw_nchips: "2",
                hw_ncoresperchip: "12",
                hw_nthreadspercore: "2",
                basemean: "1040",
                peakmean: "1080",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150209-35020.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520X (Intel Xeon E7-8890 v3)",
                base_copies: "144",
                hw_ncores: "72",
                hw_nchips: "4",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "2740",
                peakmean: "Not Run",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q2/cpu2006-20150518-36440.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E7-8890 v3)",
                base_copies: "144",
                hw_ncores: "72",
                hw_nchips: "4",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "2740",
                peakmean: "Not Run",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q2/cpu2006-20150518-36441.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520X (Intel Xeon E7-8890 v3)",
                base_copies: "144",
                hw_ncores: "72",
                hw_nchips: "4",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "2740",
                peakmean: "Not Run",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q2/cpu2006-20150518-36442.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520X (Intel Xeon E7-8890 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5400",
                peakmean: "Not Run",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150713-37176.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E7-8890 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5400",
                peakmean: "Not Run",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150713-37177.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520X (Intel Xeon E7-8890 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5400",
                peakmean: "Not Run",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150713-37178.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520X (Intel Xeon E7-8880 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5230",
                peakmean: "5390",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150806-37332.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E7-8880 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5230",
                peakmean: "5390",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150806-37333.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520X (Intel Xeon E7-8880 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5230",
                peakmean: "5390",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150806-37334.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520X (Intel Xeon E7-8890 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5430",
                peakmean: "5590",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150806-37335.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E7-8890 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5430",
                peakmean: "5590",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150806-37336.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520X (Intel Xeon E7-8890 v3)",
                base_copies: "288",
                hw_ncores: "144",
                hw_nchips: "8",
                hw_ncoresperchip: "18",
                hw_nthreadspercore: "2",
                basemean: "5430",
                peakmean: "5590",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150806-37337.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS520X (Intel Xeon E7-8893 v3)",
                base_copies: "64",
                hw_ncores: "32",
                hw_nchips: "8",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "1700",
                peakmean: "1780",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150824-37428.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "BladeSymphony BS2500 (Intel Xeon E7-8893 v3)",
                base_copies: "64",
                hw_ncores: "32",
                hw_nchips: "8",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "1700",
                peakmean: "1780",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150824-37429.html"
      },
            {
                test_sponsor: "HITACHI",
                hw_model: "Compute Blade 520X (Intel Xeon E7-8893 v3)",
                base_copies: "64",
                hw_ncores: "32",
                hw_nchips: "8",
                hw_ncoresperchip: "4",
                hw_nthreadspercore: "2",
                basemean: "1700",
                peakmean: "1780",
                htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150824-37430.html"
      },
    ]
    }
});

var vm2 = new Vue({
    el: "#app2",
    data: {

        sponsors: [
            {
                sponsor: "ACTION S.A.",
                sponsor_nosp: "ACTION_S.A."
            },
            {
                sponsor: "ASUSTeK Computer Inc.",
                sponsor_nosp: "ASUSTeK_Computer_Inc."
            },
            {
                sponsor: "Acer Incorporated",
                sponsor_nosp: "Acer_Incorporated"
            },
            {
                sponsor: "Acer Incorporation",
                sponsor_nosp: "Acer_Incorporation"
            },
            {
                sponsor: "Advanced Micro Devices",
                sponsor_nosp: "Advanced_Micro_Devices"
            },
            {
                sponsor: "Apple, Inc.",
                sponsor_nosp: "Apple,_Inc."
            },
            {
                sponsor: "Apple Computer, Inc.",
                sponsor_nosp: "Apple_Computer,_Inc."
            },
            {
                sponsor: "BOXX Technologies, Inc.",
                sponsor_nosp: "BOXX_Technologies,_Inc."
            },
            {
                sponsor: "Bull SAS",
                sponsor_nosp: "Bull_SAS"
  },
            {
                sponsor: "Cisco Systems",
                sponsor_nosp: "Cisco_Systems"
  },
            {
                sponsor: "ClearCube Technology",
                sponsor_nosp: "ClearCube_Technology"
  },
            {
                sponsor: "Cryo Performance Computing Ltd",
                sponsor_nosp: "Cryo_Performance_Computing_Ltd"
  },
            {
                sponsor: "Dell Inc.",
                sponsor_nosp: "Dell_Inc."
  },
            {
                sponsor: "E4 Computer Engineering S.p.A.",
                sponsor_nosp: "E4_Computer_Engineering_S.p.A."
  },
            {
                sponsor: "FORMAT",
                sponsor_nosp: "FORMAT"
  },
            {
                sponsor: "Fujitsu",
                sponsor_nosp: "Fujitsu"
  },
            {
                sponsor: "Fujitsu Limited",
                sponsor_nosp: "Fujitsu_Limited"
  },
            {
                sponsor: "Fujitsu Siemens Computers",
                sponsor_nosp: "Fujitsu_Siemens_Computers"
  },
            {
                sponsor: "Future Publishing Ltd.",
                sponsor_nosp: "Future_Publishing_Ltd."
  },
            {
                sponsor: "HITACHI",
                sponsor_nosp: "HITACHI"
  },
            {
                sponsor: "HPE",
                sponsor_nosp: "HPE"
  },
            {
                sponsor: "Hewlett-Packard Company",
                sponsor_nosp: "Hewlett-Packard_Company"
  },
            {
                sponsor: "Huawei",
                sponsor_nosp: "Huawei"
  },
            {
                sponsor: "Hypertechnologies Ciara, Inc",
                sponsor_nosp: "Hypertechnologies_Ciara,_Inc"
  },
            {
                sponsor: "IBM Corporation",
                sponsor_nosp: "IBM_Corporation"
  },
            {
                sponsor: "Incom S.A.",
                sponsor_nosp: "Incom_S.A."
  },
            {
                sponsor: "Inspur Corporation",
                sponsor_nosp: "Inspur_Corporation"
  },
            {
                sponsor: "Intel Corporation",
                sponsor_nosp: "Intel_Corporation"
  },
            {
                sponsor: "Itautec",
                sponsor_nosp: "Itautec"
  },
            {
                sponsor: "J.P Sa Couto S.A.",
                sponsor_nosp: "J.P_Sa_Couto_S.A."
  },
            {
                sponsor: "Lenovo Group Limited",
                sponsor_nosp: "Lenovo_Group_Limited"
  },
            {
                sponsor: "Maxdata",
                sponsor_nosp: "Maxdata"
  },
            {
                sponsor: "NEC Corporation",
                sponsor_nosp: "NEC_Corporation"
  },
            {
                sponsor: "NTT System S. A.",
                sponsor_nosp: "NTT_System_S._A."
  },
            {
                sponsor: "Oracle Corporation",
                sponsor_nosp: "Oracle_Corporation"
  },
            {
                sponsor: "PC Factory S.A.",
                sponsor_nosp: "PC_Factory_S.A."
  },
            {
                sponsor: "Quanta Computer Inc.",
                sponsor_nosp: "Quanta_Computer_Inc."
  },
            {
                sponsor: "SGI",
                sponsor_nosp: "SGI"
  },
            {
                sponsor: "ScaleMP",
                sponsor_nosp: "ScaleMP"
  },
            {
                sponsor: "Sugon",
                sponsor_nosp: "Sugon"
  },
            {
                sponsor: "Sun Microsystems",
                sponsor_nosp: "Sun_Microsystems"
  },
            {
                sponsor: "Supermicro",
                sponsor_nosp: "Supermicro"
  },
            {
                sponsor: "Unisys Corporation",
                sponsor_nosp: "Unisys_Corporation"
  },
            {
                sponsor: "Wipro Limited",
                sponsor_nosp: "Wipro_Limited"
  },
            {
                sponsor: "ZTE",
                sponsor_nosp: "ZTE"
  },
]
    }
});
