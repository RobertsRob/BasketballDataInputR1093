function buttonPress()
{
    let valTime = document.getElementById("inputTime").value;
    let valTeamName = document.getElementById("inputTeamName").value;
    let valName = document.getElementById("inputSAname").value;
    let valPointsGet = document.getElementById("optionPoints").value;
    let valTeamEsos = document.getElementById("teamEs").value;
    let valTeamAnother = document.getElementById("teamAn").value;


    if(valTime.length < 2 || valTeamName.length < 2 || valName.length < 2|| valTeamEsos.length < 1|| valTeamAnother.length < 1)
    {
        Swal.fire({
            icon: 'error',
            title: '<b style="font-family:arial;">Enter all gaps!</b>',
            text: 'You must to complete all gaps before downloading!',
        })
        return;
    }
    let gameResult = valTeamEsos + ":" + valTeamAnother;
    let content = "Laiks,Komandas nosaukums,Spēlētaja vārds,Punktus ieguva,Esošais spēles rezultāts" + "\n" + valTime + "," + valTeamName + "," + valName + "," + valPointsGet + "," + gameResult + "\n";

    // const csvBlob = new Blob(["1, 5"]);
    const csvBlob = new Blob([content]);

    a2.download = "basketbolaDatuIevads.csv";

    a2.href = URL.createObjectURL(csvBlob);

    a2.click();

}
