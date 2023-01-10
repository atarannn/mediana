export const filtersButtonView = ({ svgName, type, name }) => {
  return `
    <button class="map-navigation__button js-button-map-navigation" data-type="${type}">
        <svg class="icon--${svgName}" role="presentation">
            <use xlink:href="#${svgName}"></use>
        </svg>
        <span>${name}</span>
    </button>
      `;
};

export const mapsFiltersView = items => {
  return items.map(item => filtersButtonView(item)).join('');
};
