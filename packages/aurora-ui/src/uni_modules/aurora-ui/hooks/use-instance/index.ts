import { ComponentInternalInstance, Ref, ref } from 'vue';

export interface InstanceReturns {
  instances: Ref<ComponentInternalInstance[]>;
  has: (uid: string | number) => boolean;
  add: (instance: ComponentInternalInstance) => void;
  remove: (uid: string | number) => void;
  clear: () => void;
}

export function useInstance() {
  const instances = ref<ComponentInternalInstance[]>([]);

  const has = (uid: string | number) => {
    return instances.value.findIndex((item) => item.uid == uid) > -1;
  };

  function add(instance: ComponentInternalInstance) {
    if (instance && !has(instance.uid)) {
      instances.value.push(instance);
    }
  }

  function remove(uid: string | number) {
    instances.value = instances.value.filter((item) => item.uid != uid);
  }

  function clear() {
    instances.value.length = 0;
  }

  return {
    instances,
    has,
    add,
    remove,
    clear,
  };
}
