export const graphConfigOptions = {
  interaction: { multiselect: true, hoverConnectedEdges: true },
  autoResize: true,
  height: '100%',
  width: '100%',
  nodes: {
    borderWidth: 2,
    size: 10,
    color: {
      border: '#5C83CF',
      background: '#ffff',
      highlight: {
        border: '#DE4545',
        background: '#FFBBBB',
      },
    },
    font: { color: '#39393a' },
  },
  edges: {
    color: {
      color: '#39393a',
      highlight: '#EF8787',
    },
    arrows: {
      to: {
        enabled: false,
      },
      from: {
        enabled: false,
      },
    },
  },
};
