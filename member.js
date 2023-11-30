function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");

    memberSkills.innerHTML = "";

    if (skills.value == "Frontend") {
        memberSkills.innerHTML = '<option value="HTML">HTML</option><option value="CSS">CSS</option><option value="JavaScript">JavaScript</option>';
    } else if (skills.value == "Backend") {
        memberSkills.innerHTML = '<option value="PHP">PHP</option><option value="MySQL">MySQL</option><option value="NodeJS">NodeJS</option>';
    } else if (skills.value == "Designer") {
        memberSkills.innerHTML = '<option value="UI">UI</option><option value="UX">UX</option><option value="Photoshop">Photoshop</option>';
    } else {
        memberSkills.innerHTML = '<option value="HTML">HTML</option><option value="CSS">CSS</option><option value="JavaScript">JavaScript</option><option value="PHP">PHP</option><option value="MySQL">MySQL</option><option value="NodeJS">NodeJS</option><option value="UI">UI</option><option value="UX">UX</option><option value="Photoshop">Photoshop</option>';
    }
}