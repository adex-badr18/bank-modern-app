import styles, { layout } from "../style";
import {clients} from '../constants';

const Clients = () => (
    <section id='clients' className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {
                clients.map(client => (
                    <div key={client.id} className={`flex-1 flex-wrap ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}>
                        <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain hover:color-white client-logo" />
                    </div>
                ))
            }
        </div>
    </section>
);

export default Clients;