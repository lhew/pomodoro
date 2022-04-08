"use strict"; {
    // Â© 2019 Xah Lee
    // version 2019-06-26
    const center_x_slider = document.getElementById("center_x_slider");
    const center_y_slider = document.getElementById("center_y_slider");
    const centerX = document.getElementById("centerX");
    const centerY = document.getElementById("centerY");
    const rx_slider = document.getElementById("rx_slider");
    const ry_slider = document.getElementById("ry_slider");
    const rx = document.getElementById("rx");
    const ry = document.getElementById("ry");
    const sweepStart_slider = document.getElementById("sweepStart_slider");
    const sweepStart = document.getElementById("sweepStart");
    const sweepDelta_slider = document.getElementById("sweepDelta_slider");
    const sweepDelta = document.getElementById("sweepDelta");
    const rot_slider = document.getElementById("rot_slider");
    const rot = document.getElementById("rot");
    const canvas08788 = document.getElementById("canvas08788");
    const textDisplay50572 = document.getElementById("textDisplay50572");
    const cos = Math.cos;
    const sin = Math.sin;
    const Ï€ = Math.PI;
    // const f_matrix_times = (( [[a,b], [c,d]], [x,y]) => [ a * x + b * y, c * x + d * y]);
    const f_matrix_times = (([
        [a, b],
        [c, d]
    ], [x, y]) => [a * x + b * y, c * x + d * y]);
    const f_rotate_matrix = ((x) => {
        const cosx = cos(x);
        const sinx = sin(x);
        return [
            [cosx, -sinx],
            [sinx, cosx]
        ];
    });
    // const f_vec_add = (([a1, a2], [b1, b2]) => [a1 + b1, a2 + b2]);
    const f_vec_add = (([a1, a2], [b1, b2]) => [a1 + b1, a2 + b2]);
    const f_svg_ellipse_arc = (([cx, cy], [rx, ry], [t1, Î”], Ï†) => {
        /* [
        returns a a array that represent a ellipse for SVG path element d attribute.
        cx,cy â†’ center of ellipse.
        rx,ry â†’ major minor radius.
        t1 â†’ start angle, in radian.
        Î” â†’ angle to sweep, in radian. positive.
        Ï† â†’ rotation on the whole, in radian.
        url: SVG Circle Arc http://xahlee.info/js/svg_circle_arc.html
        Version 2019-06-19
         ] */
        Î” = Î” % (2 * Ï€);
        const rotMatrix = f_rotate_matrix(Ï†);
        const [sX, sY] = (f_vec_add(f_matrix_times(rotMatrix, [rx * cos(t1), ry * sin(t1)]), [cx, cy]));
        const [eX, eY] = (f_vec_add(f_matrix_times(rotMatrix, [rx * cos(t1 + Î”), ry * sin(t1 + Î”)]), [cx, cy]));
        const fA = ((Î” > Ï€) ? 1 : 0);
        const fS = ((Î” > 0) ? 1 : 0);
        return [" M ", sX, " ", sY, " A ", rx, ry, Ï† / Ï€ * 180, fA, fS, eX, eY];
    });
    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute('style', "stroke:red; fill:none; stroke-width:2");
    svg1.setAttribute('width', "400");
    svg1.setAttribute('height', "400");
    canvas08788.appendChild(svg1);
    const f_update = (() => {
        const params = f_svg_ellipse_arc([
            parseFloat(centerX.value),
            parseFloat(centerY.value)
        ], [
            parseFloat(rx.value),
            parseFloat(ry.value)
        ], [
            parseFloat(sweepStart.value) / 180 * Ï€,
            parseFloat(sweepDelta.value) / 180 * Ï€
        ], parseFloat(rot.value) / 180 * Ï€);
        const cmdStr1 = params.join(" ");
        const cmdStr2 = params.map(((x) => ((typeof x === "number") ? x.toFixed(0) : x))).join(" ");
        const path86021 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path86021.setAttribute("d", cmdStr1);
        svg1.innerHTML = "";
        svg1.appendChild(path86021);
        textDisplay50572.textContent = `<path d="${cmdStr2}" />`;
    });
    center_x_slider.addEventListener("input", (() => {
        centerX.value = center_x_slider.value;
    }), false);
    center_y_slider.addEventListener("input", (() => {
        centerY.value = center_y_slider.value;
    }), false);
    centerX.addEventListener("input", (() => {
        center_x_slider.value = centerX.value;
    }), false);
    centerY.addEventListener("input", (() => {
        center_y_slider.value = centerY.value;
    }), false);
    rx_slider.addEventListener("input", (() => {
        rx.value = rx_slider.value;
    }), false);
    ry_slider.addEventListener("input", (() => {
        ry.value = ry_slider.value;
    }), false);
    rx.addEventListener("input", (() => {
        rx_slider.value = rx.value;
    }), false);
    ry.addEventListener("input", (() => {
        ry_slider.value = ry.value;
    }), false);
    sweepStart_slider.addEventListener("input", (() => {
        sweepStart.value = sweepStart_slider.value;
    }), false);
    sweepStart.addEventListener("input", (() => {
        sweepStart_slider.value = sweepStart.value;
    }), false);
    sweepDelta_slider.addEventListener("input", (() => {
        sweepDelta.value = sweepDelta_slider.value;
    }), false);
    sweepDelta.addEventListener("input", (() => {
        sweepDelta_slider.value = sweepDelta.value;
    }), false);
    rot_slider.addEventListener("input", (() => {
        rot.value = rot_slider.value;
    }), false);
    rot.addEventListener("input", (() => {
        rot_slider.value = rot.value;
    }), false);
    [
        center_x_slider,
        center_y_slider,
        centerX, centerY,
        rx_slider,
        ry_slider,
        rx, ry,
        sweepStart_slider,
        sweepStart,
        sweepDelta_slider,
        sweepDelta,
        rot_slider,
        rot
    ].map(((x) => {
        x.addEventListener('input', f_update, false);
    }));
    f_update();
}