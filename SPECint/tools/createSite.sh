#!/bin/sh

if [ $# -ne 1 ]; then
  echo
  echo "usage: $0 param1[ original html file ]"
  echo
  exit 1
fi

IN=$1
TMP="tmp_$$"
TMPMENU="tmpmenu_$$"
OUT="../js/app.js"
SPONSOR="../js/sponsors.js"

awk -F '["<>]' 'BEGIN{ array["test_sponsor"]       = "";
                       array["hw_model"]           = "";
                       array["base_copies"]        = "";
                       array["hw_ncores"]          = "";
                       array["hw_nchips"]          = "";
                       array["hw_ncoresperchip"]   = "";
                       array["hw_nthreadspercore"] = "";
                       array["basemean"]           = "";
                       array["peakmean"]           = "";
                       array["html"]               = "";
                       printflg = 1;
                     }{ key   = $3;
                        value = $5;
                        if(key in array){
                          array[key] = value
                          if(key == "peakmean" && array["test_sponsor"] != ""){
			    if(array["test_sponsor"] in sponsor_list){
			    }else{
			      sponsor = array["test_sponsor"];
			      sponsor_list[sponsor] = sponsor;
			    }
                            printf array["test_sponsor"]"|"
			    printf array["hw_model"]"|"
			    printf array["base_copies"]"|"
			    printf array["hw_ncores"]"|"
			    printf array["hw_nchips"]"|"
			    printf array["hw_ncoresperchip"]"|"
			    printf array["hw_nthreadspercore"]"|"
			    printf array["basemean"]"|"
			    printf  array["peakmean"]"|"
			    print  array["html"]
			    array["test_sponsor"]       = "";
			    array["hw_model"]           = "";
			    array["base_copies"]        = "";
			    array["hw_ncores"]          = "";
			    array["hw_nchips"]          = "";
			    array["hw_ncoresperchip"]   = "";
			    array["hw_nthreadspercore"] = "";
			    array["basemean"]           = "";
			    array["peakmean"]           = "";
			    array["html"]               = "";
                          }
                        }else if($5 == "HTML"){
			  array["html"] = $3;
			}
                     }END{
		       for(sponsor in sponsor_list){
		         print "_____|"sponsor;
		       }
		     }' ${IN} | sed 's/&nbsp;//g' >> ${TMP}

OIFS=${IFS}
IFS="
"

sponsor_list=`grep "_____" ${TMP} | awk -F'|' '{print $2}' | sort -u`
function createJsFile(){
  local sponsor="$@"
  local sponsor_nosp=`echo ${sponsor} | sed 's/ /_/g'`
  local jsfile="../js/${sponsor_nosp}.js"
  echo '                    <li class="'${sponsor_nosp}' inactive"><a href="'${sponsor_nosp}'.html">'${sponsor}'</a></li>' >> ${TMPMENU}
  echo "var vm = new Vue({"  > ${jsfile}
  echo "  el: \"#app\","     >> ${jsfile}
  echo "  data: {"           >> ${jsfile}
  echo "    systems: ["      >> ${jsfile}

  grep "^${sponsor}" ${TMP} | awk -F'|' '{ print "      {"
                                           print "        test_sponsor: \""$1"\","
                                           print "        hw_model: \""$2"\","
                                           print "        base_copies: \""$3"\","
                                           print "        hw_ncores: \""$4"\","
                                           print "        hw_nchips: \""$5"\","
                                           print "        hw_ncoresperchip: \""$6"\","
                                           print "        hw_nthreadspercore: \""$7"\","
                                           print "        basemean: \""$8"\","
                                           print "        peakmean: \""$9"\","
                                           print "        htmllink: \"https://www.spec.org/cpu2006/results/"$10"\""
                                           print "      },"
                                         }' >> ${jsfile}

  echo "    ]"              >> ${jsfile}
  echo "  }"                >> ${jsfile}
  echo "});"                >> ${jsfile}
}


echo "var vm2 = new Vue({" >  ${SPONSOR}
echo "  el: \"#app2\","    >> ${SPONSOR}
echo "  data: {"           >> ${SPONSOR}
echo "    sponsors: ["     >> ${SPONSOR}

for sponsor in $sponsor_list
do
  sponsor_nosp=`echo ${sponsor} | sed 's/ /_/g'`
  echo "      {"                                   >> ${SPONSOR}
  echo "        sponsor: \"${sponsor}\","          >> ${SPONSOR}
  echo "        sponsor_nosp: \"${sponsor_nosp}\"" >> ${SPONSOR}
  echo "      },"                                  >> ${SPONSOR}
  createJsFile "${sponsor}" &
done

echo "    ]" >> ${SPONSOR}
echo "  }"   >> ${SPONSOR}
echo "});"   >> ${SPONSOR}

wait

sort -u -o ${TMPMENU} ${TMPMENU}

for sponsor in $sponsor_list
do
  sponsor_nosp=`echo ${sponsor} | sed 's/ /_/g'`
  cat html_base/template_part1.html > ../${sponsor_nosp}.html
#  cat ${TMPMENU} | sed 's/'${sponsor_nosp}' inactive/'${sponsor_nosp}' active/g' >> ../${sponsor_nosp}.html
#  cat html_base/template_part2.html >> ../${sponsor_nosp}.html
  echo '    <script src="js/'${sponsor_nosp}'.js"></script>' >> ../${sponsor_nosp}.html
  cat html_base/template_part3.html >> ../${sponsor_nosp}.html
done

#cat html_base/template_part1.html > ../index.html
#cat ${TMPMENU} >> ../index.html
#cat html_base/template_part2.html >> ../index.html
#echo '    <script src="js/app.js"></script>' >> ../index.html
#cat html_base/template_part3.html >> ../index.html

rm -f ${TMP} ${TMPMENU}
IFS=${OIFS}

exit 0