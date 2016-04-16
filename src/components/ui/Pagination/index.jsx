import './style.scss';

function range(start, last) {
  const array = [];
  for (let i = start; i < last; i++) {
    array.push(i);
  }
  return array;
}

class ViewModel {
  constructor({ page, link }) {
    this.page = page();
    this.pageNumbers = this.buildPageNumbers(this.page, parseInt(link.last.page, 10));
  }

  buildPageNumbers(page, lastpage) {
    if (lastpage < 10) {
      return range(1, lastpage + 1);
    }

    // [1]  2   3  ...  10
    if (page === 1) {
      return [1, 2, 3, '...', lastpage];
    }

    //  1  [2]  3  ...  10
    //  1   2  [3]  4  ... 10
    //  1   2   3  [4]  5  ... 10
    if (page >= 2 && page <= 4) {
      const pages = range(1, page + 2);
      return pages.concat(['...', lastpage]);
    }

    //  1  ...  4  [5]  6  ... 10
    //  1  ...  5  [6]  7  ... 10
    if (page >= 5 && page <= lastpage - 4) {
      return [
        1,
        '...',
        page - 1,
        page,
        page + 1,
        '...',
        lastpage,
      ];
    }

    //  1  ...  6  [7]  8  9   10
    //  1  ...  7  [8]  9  10
    //  1  ...  8  [9]  10
    //  1  ...  8   9  [10]
    if (page > lastpage - 4) {
      const start = lastpage === page
                  ? page - 2
                  : page - 1;
      const pages = range(start, lastpage + 1);
      return ([1, '...']).concat(pages);
    }

    return undefined;
  }
}

export default {
  controller(props) {
    return new ViewModel(props);
  },

  view(ctrl, props) {
    const previousButton =
      ctrl.page <= 1
      ? <div class="item disabled">Previous</div>
      : (
        <a class="item"
           href={`${props.href}?page=${ctrl.page - 1}`}
           config={m.route}>
          Previous
        </a>
      );

    const nextButton =
      ctrl.page >= props.link.last.page
      ? <div class="item disabled">Next</div>
      : (
        <a class="item"
           href={`${props.href}?page=${ctrl.page + 1}`}
           config={m.route}>
          Next
        </a>
      );

    return (
      <div class="ui pagination menu">
        {previousButton}
        {
          ctrl.pageNumbers.map(n => {
            const active = n === ctrl.page ? 'active' : '';

            return n === '...'
                 ? <div class="item disabled">{n}</div>
                 : (
                   <a class={`${active}  item`}
                      href={`${props.href}?page=${n}`}
                      config={m.route}
                   >
                     {n}
                   </a>
                 );
          })
        }
        {nextButton}
      </div>
    );
  },
};
