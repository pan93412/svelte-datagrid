/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrViewportScrollProps {
  
  /** Width of inner content */
  contentWidth?: Components.RevogrViewportScroll["contentWidth"]
  
  /** Height of inner content */
  contentHeight?: Components.RevogrViewportScroll["contentHeight"]
}

interface RevogrViewportScrollEvents {
  
  /**  */
  scrollViewport: Parameters<JSX.RevogrViewportScroll["onScrollViewport"]>[0]
  
  /**  */
  resizeViewport: Parameters<JSX.RevogrViewportScroll["onResizeViewport"]>[0]
}

interface RevogrViewportScrollSlots {
  default: any
}
  
/* generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let revogr_viewport_scroll;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			revogr_viewport_scroll = element("revogr-viewport-scroll");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_viewport_scroll, "content-width", /*contentWidth*/ ctx[0]);
			set_custom_element_data(revogr_viewport_scroll, "content-height", /*contentHeight*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, revogr_viewport_scroll, anchor);

			if (default_slot) {
				default_slot.m(revogr_viewport_scroll, null);
			}

			/*revogr_viewport_scroll_binding*/ ctx[9](revogr_viewport_scroll);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revogr_viewport_scroll, "scrollViewport", /*onEvent*/ ctx[3]),
					listen(revogr_viewport_scroll, "resizeViewport", /*onEvent*/ ctx[3])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*contentWidth*/ 1) {
				set_custom_element_data(revogr_viewport_scroll, "content-width", /*contentWidth*/ ctx[0]);
			}

			if (!current || dirty & /*contentHeight*/ 2) {
				set_custom_element_data(revogr_viewport_scroll, "content-height", /*contentHeight*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(revogr_viewport_scroll);
			if (default_slot) default_slot.d(detaching);
			/*revogr_viewport_scroll_binding*/ ctx[9](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { contentWidth = undefined } = $$props;
	let { contentHeight = undefined } = $$props;
	const setScroll = (...args) => __ref.setScroll(...args);
	const changeScroll = (...args) => __ref.changeScroll(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_viewport_scroll_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("contentWidth" in $$props) $$invalidate(0, contentWidth = $$props.contentWidth);
		if ("contentHeight" in $$props) $$invalidate(1, contentHeight = $$props.contentHeight);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		contentWidth,
		contentHeight,
		__ref,
		onEvent,
		setScroll,
		changeScroll,
		getWebComponent,
		$$scope,
		slots,
		revogr_viewport_scroll_binding
	];
}

class RevogrViewportScroll extends SvelteComponent {
  $$prop_def: RevogrViewportScrollProps;
  $$events_def: RevogrViewportScrollEvents;
  $$slot_def: RevogrViewportScrollSlots;

  $on<K extends keyof RevogrViewportScrollEvents>(type: K, callback: (e: RevogrViewportScrollEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrViewportScrollProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			contentWidth: 0,
			contentHeight: 1,
			setScroll: 4,
			changeScroll: 5,
			getWebComponent: 6
		});
	}

	
  /**  */
 get setScroll(): Components.RevogrViewportScroll["setScroll"] {
		return this.$$.ctx[4];
	}

	
  /** update on delta in case we don't know existing position or external change */
 get changeScroll(): Components.RevogrViewportScroll["changeScroll"] {
		return this.$$.ctx[5];
	}

	get getWebComponent(): HTMLRevogrViewportScrollElement | undefined {
		return this.$$.ctx[6];
	}
}

export default RevogrViewportScroll;