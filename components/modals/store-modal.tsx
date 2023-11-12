"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"

export const StoreModal = ()=>{

    const useStore = useStoreModal();
    return (
        <Modal title="Create a Event" desc="Please Enter All Detail for event" isOpen={useStore.isOpen} onClose={useStore.onClose}>
            Create Event And Explore
        </Modal>
    )
}