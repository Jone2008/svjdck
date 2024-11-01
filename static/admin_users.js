function users_list(e){let o=document.getElementById("data-table").querySelector("tbody");e.forEach((t,e)=>{var n=document.createElement("tr"),d=document.createElement("td");d.textContent=e+1,n.appendChild(d);for(let e=1;e<t.length-1;e++){var l=document.createElement("td");l.textContent=t[e],n.appendChild(l)}var e=document.createElement("td"),d=(e.textContent="1"===t[t.length-1]?"正常":"禁用",e.className="1"===t[t.length-1]?"enabled":"disabled",n.appendChild(e),document.createElement("td")),e=document.createElement("button"),a=(e.textContent="编辑",e.className="edit-button",console.log(t.slice(1,7)),e.onclick=()=>edit_user_info(t.slice(1,7)),document.createElement("button"));a.textContent="删除",a.className="del-button",a.onclick=()=>delete_user(t[1]),d.appendChild(e),d.appendChild(a),n.appendChild(d),o.appendChild(n)})}function delete_user(e){let n=document.getElementById("edit-modal");n.style.display="flex",n.classList.add("del-modal"),n.innerHTML="";var t=document.createElement("div"),d=(t.classList.add("buttons"),document.createElement("button")),l=(d.textContent="确认",d.classList.add("button"),d.onclick=function(){fetch("/admin_users/delete",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e})}).then(t=>{t.json().then(e=>{200===t.status?(console.log("Success:",e),n.style.display="none",window.location.reload()):201===t.status?(console.log("Forbidden:",t),window.location.href="/admin"):console.error("Error:",t)})}).catch(e=>{console.error("Fetch Error:",e)})},document.createElement("button"));l.textContent="取消",l.classList.add("button"),l.onclick=()=>{n.style.display="none"},t.appendChild(l),t.appendChild(d),n.appendChild(t)}function edit_user_info(a){let o=document.getElementById("edit-modal");o.style.display="flex",o.classList.add("edit-modal"),o.innerHTML="";var e=document.createElement("div"),t=(e.classList.add("edit-modal-content"),document.createElement("div")),n=(t.classList.add("div_user"),document.createElement("label")),d=(n.textContent="账号：",document.createElement("input")),n=(d.type="text",d.id="user_input",d.classList.add("user_input"),d.value=a[0],t.appendChild(n),t.appendChild(d),document.createElement("div")),d=(n.classList.add("div_passwd"),document.createElement("label")),l=(d.textContent="密码：",document.createElement("input")),d=(l.type="text",l.id="passwd_input",l.classList.add("passwd_input"),l.value=a[1],n.appendChild(d),n.appendChild(l),document.createElement("div")),l=(d.classList.add("div_remarks"),document.createElement("label")),s=(l.textContent="备注：",document.createElement("input")),l=(s.type="text",s.id="remarks_input",s.classList.add("remarks_input"),s.value=a[2],d.appendChild(l),d.appendChild(s),document.createElement("div")),s=(l.classList.add("div_uuid"),document.createElement("label")),c=(s.textContent="uuid：",document.createElement("input")),s=(c.type="text",c.id="uuid_input",c.classList.add("uuid_input"),c.value=a[3],l.appendChild(s),l.appendChild(c),document.createElement("label"));s.appendChild(document.createTextNode("账号状态："));let i=document.createElement("input");i.type="checkbox";var c="1"===a[5],c=(console.log(a),i.checked=c,s.appendChild(i),document.createElement("div")),u=(c.classList.add("buttons"),document.createElement("button")),r=(u.textContent="确认",u.classList.add("button"),u.onclick=()=>{var e=document.getElementById("user_input").value,t=document.getElementById("passwd_input").value,n=document.getElementById("remarks_input").value,d=document.getElementById("uuid_input").value,l=i.checked,e={user_value:e,passwd_value:t,remarks_value:n,uuid_value:d,pt_pin:a[4],status:l?1:0};fetch("/admin_users/update",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>{t.json().then(e=>{200===t.status?(console.log("Success:",e),o.style.display="none",window.location.reload()):201===t.status?(console.log("Forbidden:",t),window.location.href="/admin"):console.error("Error:",t)})}).catch(e=>{console.error("Fetch Error:",e)})},document.createElement("button"));r.textContent="取消",r.classList.add("button"),r.onclick=()=>{o.style.display="none"},c.appendChild(r),c.appendChild(u),e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(l),e.appendChild(s),e.appendChild(c),o.appendChild(e)}function init_users_list(){fetch("/admin_users/list",{method:"POST",credentials:"include"}).then(t=>{t.json().then(e=>{200===t.status?(console.log("Success:",e),users_list(e)):201===t.status?(console.log("Forbidden:",t),window.location.href="/admin"):console.error("Error:",t)})}).catch(e=>{console.error("Fetch Error:",e)})}document.addEventListener("DOMContentLoaded",init_users_list);