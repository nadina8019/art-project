export const selectPainter = (painter) => {
    console.log("Clicked: " +painter.first);

    return {
        type: "PAINTER_SELECTED",
        payload: painter
    }
};