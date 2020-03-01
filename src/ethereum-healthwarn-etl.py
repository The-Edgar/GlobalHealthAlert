from Naked.toolshed.shell import muterun_js
import pandas as pd
import re

response = muterun_js('src/read_events_kovan.js')

if response.exitcode == 0:

  str_response = response.stdout.decode('utf-8')

  cases = re.findall(r"case_id: '(.*)',\n      city: '", str_response)
  cities = re.findall(r"city: '(.*)',\n      date:", str_response)
  dates = re.findall(r"date: '(\d{8})", str_response)

  df = pd.DataFrame(data={"case":cases,
                     "city":cities,
                     "date":dates})

  df_uniques = df.drop_duplicates()

  df_uniques.to_gbq(destination_table='positive_tested_cases.positive_tested_cases_mock',
                    project_id='eth-london-healthwarn',
                    if_exists='replace')

  print("Data upload completed successfully.")

else:

  print("No data retrieved.")

  # case_id: 'case-457',\n      city: 'London',\n      date: '20200203'\n