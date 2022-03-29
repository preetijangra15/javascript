let monday = document.getElementById("monday")
let tuesday = document.getElementById("tuesday")
let wednesday = document.getElementById("wed")
let thursday = document.getElementById("thursday")
let friday = document.getElementById("friday")
let saturday = document.getElementById("saturday")
let sunday = document.getElementById("sunday")

let classes = document.getElementById("classes")
let co_link = "https://meet.google.com/zie-wfth-ygv"
let micro_link = "https://meet.google.com/tod-dujq-czb"
let toc_link = "https://meet.google.com/dpu-dzrv-rqu"
let it_link = "https://meet.google.com/cjq-rhne-tyi"

let listitems = ""

monday.addEventListener("click", function(){
    

    listitems += `
            <li>
                9:35 - 10:35 IT THEORY
                <button>
                    <a target = '_blank' href = '${it_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                10:40 - 12:45 MICRO LAB
                <button>
                    <a target = '_blank' href = '${micro_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                1:00 - 2:00 CO THEORY
                <button>
                    <a target = '_blank' href = '${co_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            `

    classes.innerHTML = listitems
    listitems = ""
})

tuesday.addEventListener("click", function(){
    

    listitems += `
            <li>
                10:40 - 11:40 CO THEORY
                <button>
                    <a target = '_blank' href = '${co_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                11:45 - 12:45 IT THEORY
                <button>
                    <a target = '_blank' href = '${it_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                1:00 - 2:00 MICRO THEORY
                <button>
                    <a target = '_blank' href = '${micro_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>

            <li>
                2:05 - 3:05 TOC THEORY
                <button>
                    <a target = '_blank' href = '${toc_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            `

    classes.innerHTML = listitems
    listitems = ""
})

wednesday.addEventListener("click", function(){
    

    listitems += `
            <li>
                8:30 - 10:35 IT LAB
                <button>
                    <a target = '_blank' href = '${it_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                10:40 - 11:40 IT THEORY
                <button>
                    <a target = '_blank' href = '${it_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                11:45 - 12:45 CO THEORY
                <button>
                    <a target = '_blank' href = '${co_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>

            <li>
                1:00 - 2:00 MICRO THEORY
                <button>
                    <a target = '_blank' href = '${micro_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                2:05 - 3:05 TOC THEORY
                <button>
                    <a target = '_blank' href = '${toc_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            `

    classes.innerHTML = listitems
    listitems = ""
})

thursday.addEventListener("click", function(){
    

    listitems += `
            <li>
                11:45 - 12:45 IT THEORY
                <button>
                    <a target = '_blank' href = '${it_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                1:00 - 2:00 TOC THEORY
                <button>
                    <a target = '_blank' href = '${toc_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                2:05 - 3:05 MICRO THEORY
                <button>
                    <a target = '_blank' href = '${micro_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>

            <li>
                3:10 - 5:15 MICRO LAB
                <button>
                    <a target = '_blank' href = '${micro_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            `

    classes.innerHTML = listitems
    listitems = ""
})

friday.addEventListener("click", function(){
    

    listitems += `
            <li>
                9:35 - 10:35 MICRO THEORY
                <button>
                    <a target = '_blank' href = '${micro_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                10:40 - 11:40 TOC THEORY
                <button>
                    <a target = '_blank' href = '${toc_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                11:45 - 12:45 CO THEORY
                <button>
                    <a target = '_blank' href = '${co_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>

            <li>
                1:00 - 3:05 IT LAB
                <button>
                    <a target = '_blank' href = '${it_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            `

    classes.innerHTML = listitems
    listitems = ""
})

saturday.addEventListener("click", function(){
    

    listitems += `
            <li>
                9:35 - 10:35 TOC TUTE
                <button>
                    <a target = '_blank' href = '${toc_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                10:40 - 11:40 TOC THEORY
                <button>
                    <a target = '_blank' href = '${toc_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>
            
            <li>
                11:45 - 12:45 CO THEORY
                <button>
                    <a target = '_blank' href = '${co_link}'>
                        JOIN
                    </a>
                </button>
            </li><br>

            `

    classes.innerHTML = listitems
    listitems = ""
})

sunday.addEventListener("click", function(){
    listitems += `

        <h3>
            KYU CHULL HO RHI H!!<br>
            LUCIFER DEKH LE 😑😑😑
        </h3>

    `
    classes.innerHTML = listitems

    listitems = ""
})