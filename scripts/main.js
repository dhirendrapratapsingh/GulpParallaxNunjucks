console.log("source is Main Javascript");

document.addEventListener('DOMContentLoaded', function ()
{
    var elems2 = document.querySelectorAll('.parallax');
    M.Parallax.init(elems2, 0);

    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, true);

    
});
