//section containing header image
const sec = document.createElement('section')
const avatar = document.createElement('img')
avatar.src = ''
avatar.className = 'avatar'
sec.appendChild(avatar)
//end of section

//editing the name
const header = document.createElement('h1')
header.className = 'name'
header.innerHTML = 'Tushar Agarwal'

//create br and hr for general use
const br = document.createElement('BR')
const hr = document.createElement('HR')

//div for bottom gray portion
const bottomGrey = document.createElement('div')
bottomGrey.className = 'bottomGrey'

//below section text
const info = document.createElement('p')
info.className = 'info'
info.innerHTML =
	'Rohini, New Delhi 110085    |   981-802-2943    |   tushar10agarwal@gmail.com   |   www.github.com/tusharagarwal'

//div class row
const row = document.createElement('div') //parent
row.className = 'row'
const column1 = document.createElement('div') //child of row
column1.className = 'column'
const leftContent = document.createElement('div') // child of column
leftContent.className = 'leftcontent'

//profile section
const profileInfo = document.createElement('div')
const profileHeader = document.createElement('h2')
const descProfile = document.createElement('p')
descProfile.innerHTML =
	'Innovative optimized solution seeker. Excited to be <br> at the development phase of my new career as a <br> web developer. I am ambitious, adventurous, <br> assiduous and animated.'
profileHeader.innerHTML = 'Profile'
profileInfo.append(profileHeader, descProfile)

//skill section
const skillInfo = document.createElement('div')
const skillHeader = document.createElement('h2')
skillHeader.textContent = 'Skills'

const tableName1 = document.createElement('p')
tableName1.innerHTML = 'Technical Skills'
tableName1.className = 'table-header'
tableName1.style.marginLeft = '100px'
const table1 = document.createElement('table')
const tbody1 = document.createElement('tbody')
tbody1.style.height = '2px'

const tr1 = document.createElement('TR')
const td1 = document.createElement('TD')
td1.innerHTML = 'Javascript'
const td2 = document.createElement('TD')
const input1 = document.createElement('input')
input1.type = 'range'
input1.value = '60'
input1.className = 'slider'

const tr2 = document.createElement('TR')
const td3 = document.createElement('TD')
td3.innerHTML = 'CSS'
const td4 = document.createElement('TD')
const input2 = document.createElement('input')
input2.type = 'range'
input2.value = '30'
input2.className = 'slider'

const tr3 = document.createElement('TR')
const td5 = document.createElement('TD')
td5.innerHTML = 'HTML'
const td6 = document.createElement('TD')
const input3 = document.createElement('input')
input3.type = 'range'
input3.value = '40'
input3.className = 'slider'

const tr4 = document.createElement('TR')
const td7 = document.createElement('TD')
td7.innerHTML = 'React'
const td8 = document.createElement('TD')
const input4 = document.createElement('input')
input4.type = 'range'
input4.value = '10'
input4.className = 'slider'

const tr5 = document.createElement('TR')
const td9 = document.createElement('TD')
td9.innerHTML = 'Redux'
const td10 = document.createElement('TD')
const input5 = document.createElement('input')
input5.type = 'range'
input5.value = '10'
input5.className = 'slider'

const tr6 = document.createElement('TR')
const td11 = document.createElement('TD')
td11.innerHTML = 'MongoDB'
const td12 = document.createElement('TD')
const input6 = document.createElement('input')
input6.type = 'range'
input6.value = '20'
input6.className = 'slider'

const tr7 = document.createElement('TR')
const td13 = document.createElement('TD')
td13.innerHTML = 'Deployment'
const td14 = document.createElement('TD')
const input7 = document.createElement('input')
input7.type = 'range'
input7.value = '50'
input7.className = 'slider'

//table for additional skills
const tableName2 = document.createElement('p')
tableName2.innerText = 'Additional Skills'
tableName2.style.marginLeft = '110px'
const table2 = document.createElement('table')
const tbody2 = document.createElement('tbody')
tbody2.style.height = '2px'

const tr8 = document.createElement('TR')
const td15 = document.createElement('TD')
td15.innerHTML = 'Project Management'
const td16 = document.createElement('TD')
const input8 = document.createElement('input')
input8.type = 'range'
input8.value = '50'
input8.className = 'slider'

const tr9 = document.createElement('TR')
const td17 = document.createElement('TD')
td17.innerHTML = 'Recruitment'
const td18 = document.createElement('TD')
const input9 = document.createElement('input')
input9.type = 'range'
input9.value = '50'
input9.className = 'slider'

const tr10 = document.createElement('TR')
const td19 = document.createElement('TD')
td19.innerHTML = 'Business Development'
const td20 = document.createElement('TD')
const input10 = document.createElement('input')
input10.type = 'range'
input10.value = '50'
input10.className = 'slider'

const tr11 = document.createElement('TR')
const td21 = document.createElement('TD')
td21.innerHTML = 'Editing'
const td22 = document.createElement('TD')
const input11 = document.createElement('input')
input11.type = 'range'
input11.value = '50'
input11.className = 'slider'

const tr12 = document.createElement('TR')
const td23 = document.createElement('TD')
td23.innerHTML = 'Fundraising'
const td24 = document.createElement('TD')
const input12 = document.createElement('input')
input12.type = 'range'
input12.value = '50'
input12.className = 'slider'

//append section of skillinfo
td24.append(input12)
td22.append(input11)
td20.append(input10)
td18.append(input9)
td16.append(input8)
td14.append(input7)
td12.append(input6)
td10.append(input5)
td8.append(input4)
td6.append(input3)
td4.append(input2)
td2.append(input1)

tr12.append(td23, td24)
tr11.append(td21, td22)
tr10.append(td19, td20)
tr9.append(td17, td18)
tr8.append(td15, td16)
tr7.append(td13, td14)
tr6.append(td11, td12)
tr5.append(td9, td10)
tr4.append(td7, td8)
tr3.append(td5, td6)
tr2.append(td3, td4)
tr1.append(td1, td2)
tbody2.append(tr8, tr9, tr10, tr11, tr12)
table2.appendChild(tbody2)
tbody1.append(tr1, tr2, tr3, tr4, tr5, tr6, tr7)
table1.appendChild(tbody1)
skillInfo.append(skillHeader, tableName1, table1, tableName2, table2)
//end of skillinfo

//Work experience section
const workInfo = document.createElement('div')
const workHeader = document.createElement('h2')
workHeader.innerText = 'Work Experience'
const table3 = document.createElement('table')
const tr13 = document.createElement('tr')
const td25 = document.createElement('td')
td25.innerHTML = 'Event Manager &nbsp;&nbsp;&nbsp;&nbsp;'
const td26 = document.createElement('td')
td26.innerText = ' Jan, 2018 to Feb, 2018'
const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerHTML =
	'Lead and execute all phases of event planning <br>and production spanning committee <br>recruitment, training, vendor relationships and <br> on-site facilitation.'
const li2 = document.createElement('li')
li2.innerHTML =
	'Brought new business to the organisation <br>through relentless networking and stewardship <br> which helped the company win the bid for the <br> State Department Summit on the Middle East <br>and, the companies largest civic event to date, <br> the United State of Women'
const li3 = document.createElement('li')
li3.innerHTML =
	'Exercise fiscal control over budget creation,<br>tracking and reporting. Collaborate with <br> employees at all organizational levels to <br> advance cohesive operations.'

ul.append(li1, li2, li3)
tr13.append(td25, td26)
table3.append(tr13)
workInfo.append(workHeader, table3, ul)
//work section end

leftContent.append(profileInfo, skillInfo, workInfo)
column1.append(leftContent)
//left content section end

//vertical line
const vl = document.createElement('vl')
vl.className = 'vl'

//right content begin
const column2 = document.createElement('div')
const rightContent = document.createElement('div')
rightContent.className = 'rightcontent'

const div2 = document.createElement('div')
const workHeader2 = document.createElement('h2')
workHeader2.innerText = 'Work Experience'
const tab1 = document.createElement('table')
const tr_1 = document.createElement('tr')
const td_1 = document.createElement('td')
td_1.innerHTML = 'Community Relations Mgr. &nbsp;&nbsp;&nbsp;&nbsp;'
const td_2 = document.createElement('td')
td_2.innerText = 'July, 2019 to Dec, 2019'
tr_1.append(td_1, td_2)
tab1.appendChild(tr_1)
const ul2 = document.createElement('ul')
const li4 = document.createElement('li')
li4.innerHTML = 'Arranging presentations and pitch deck.'
const li5 = document.createElement('li')
li5.innerHTML =
	'Designing a PR plan and establishing <br> important focus points.'
const li6 = document.createElement('li')
li6.innerHTML =
	'Designing, creating and managing content <br>across multiple communication platforms.'
const li7 = document.createElement('li')
li7.innerHTML = 'Building relationships with key media players'
ul2.append(li4, li5, li6, li7)
div2.append(workHeader2, tab1, ul2)

const div3 = document.createElement('div')
const edHeader = document.createElement('h2')
edHeader.innerText = 'Education'
const tab2 = document.createElement('table')
const tr_2 = document.createElement('tr')
const td_3 = document.createElement('td')
td_3.innerHTML = 'B.E Computer Science & Engineering &nbsp;&nbsp;'
const td_4 = document.createElement('td')
td_4.innerText = 'August, 2016 to July, 2020'

const msg = document.createElement('p')
msg.innerHTML =
	'Project-focused intensive program with emphasis <br> on Mongo, Express, React and Javascript (MERN) <br>technical stack.'

const ul3 = document.createElement('ul')
const li8 = document.createElement('li')
li8.innerHTML =
	"Developed a full-stack web application <br>'RenewU', using React that allows users to <br>explore constious aspects of meditation. User's <br>progress is stored on a backend created using <br>Node and MongoDB"
const li9 = document.createElement('li')
li9.innerHTML =
	"Developed a language learning app, 'Foodie <br>Phonetics' using spaced repetition and a linked <br>list data structure. React was used to create <br>the front end components while Node and <br>Mongo were used to create a backend that <br>stores user data."
const li10 = document.createElement('li')
li10.innerHTML =
	"Developed a concierge app, 'Pley', for <br>individuals looking for curated suggestions <br>when visiting a new place. React was use to <br>develop the front end which includes real-time <br>chat, drag and drop and constiety of advanced features. The backend, built using Node, <br>Express and Mongo, takes advantage of well- <br>developed RESTful API, Geospatial searching, <br>and user authentication with JWT."

ul3.append(li8, li9, li10)
tr_2.append(td_3, td_4)
tab2.append(tr_2)
div3.append(edHeader, tab2, msg, ul3)
rightContent.append(div2, div3)
column2.appendChild(rightContent)
row.append(column1, vl, column2)

//driver code
document.body.append(sec, header, br, bottomGrey, info, hr, row)
