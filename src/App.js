import React from "react";
import OrderForm from './orderForm';
// eslint-disable-next-line
import { Navbar } from 'reactstrap';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';

const App = () => {
  const Image = styled.img`
    margin: 0 auto;
    width: 100%;
    heigth: 10%;
  `
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  return (
    <div>
      <Nav>
        <h1 style={{ color: 'blue' }}>Freddy Fazzbear's Pizza</h1>
        <div>
          <Link to={'/'}>
            <button>Home</button>
          </Link>
          <Link to={'/pizza'}>
            <button>Order Here!</button>
          </Link>
        </div>
      </Nav>
      <Route expact path='/'>
        <Image class="rg_i Q4LuWd" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRUXFRcVFxcVFxgVFxgYFxUXFxcVFxYYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGRAQFzYlHSY3NDcyNSsrMDcrLTEuKystKysrNy0tLy03Ky01MC0tMSstKy0tKystLSstLS0tLS0tK//AABEIAIcBdgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xAA8EAACAgECBAIIBAMIAgMAAAABAgARAxIhBAUxQSJRBgcTYWRxk9MXMoGRFEKhIzNDUmKxwdEk8FRjov/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQFAgb/xAAxEQACAgECBAMGBQUAAAAAAAAAAQIDEQQSEyExQSJhcQUUUZGh8DKBscHxFSMz0eH/2gAMAwEAAhEDEQA/AOXkwkNUYaSQSJjUyGqR1QC5G3lwWebG0vUwBmJYXExkgtVpJp5wZLXALGEoljNFAIAGSTYSSiBkAmrR3vKBHuIBbETIFvOPHJBMCDqJE7RFoASDCSu4x0gFTSI+UtMiRAK2USJxy5ajJkAo9nEVlwENhAKRjk1Ud5aDItUAiflJJBRGdpIIl6j9r7/0lZa5IgVIBIkx6/KV6ojBJcN4isqVperQQRaQlkVSQQIHlIezlwqOQDzaJaiyVxMsAYEk2MSkvUDkPaCRsISGqEgCWSgRCSQFQUSQaJmkgYEmMkhw+JnYKilmJoACyZv3o56AozaeKyVl0llwgi62onzFkCUXaiFX4updVTKzp0NM4LhcuZtOLG2Q+SqTXzI2H6zN4PQXjn/wQO9M6g/sCZv6Xw2O8agY7VTtf5h0JX37XU9PA8fqJbEoNValmJJ7kdwtXuQLInNl7SszyhyOjH2Z4d2c/oc3yegPHr/hKflkT/kiY/i/R3isY1PhbSOpUq4//JM63m54gVsjoNGwDdyT/KD+288HG8cuTDkbAmUsEJpRe/Yft5SP6lZlLaUe7UZ2ufP1RyECu/8A1JAzp3KOWYcOHXlwKuPIwDe02YbddBG/fba7uYrnvobichuEJXUAwU2cbA/5Sd1PuNj5TXHX17tslg8PQ2bVKPM0cGWYzK8+IoxR1Kspog9QYhkm5PPNGNrB6dIleZJWchk8mTaSQVDH5y25WHO1xhu8gCduwhfSDSBG8Asg0anyiZTckESJFnjLSp28pAJ1cZEgjyLEwCZiLRFpFoJLA0aiU3JhoIJk1IM0TtIXvBI6kgYojAJXCRMSiASUy1TKiIAmAWiS1SrVFqgFgNx1Up1yZYmCCREjq84BpEmCRMYqiuOABWOAMIArhqiYxXBBK57OT8rycVkGPEpJPU7kKPM1PJgxM7BVFsxAHzM6LyTKvBZhw+IarUDI5oamYXsTsoBFd9q98zam/hx8PU1aajiy59DL8r9H14MKmBUfiGB1a71V0LdNlB7bDebRyv0fz5F9vkdBlcWTuDW1BdvDYvf3jpLcfDAN4QEagNWx1AjoT1NX3lfN+fZ+GxMGCFb0oRYcLXWulUCAdpyIqOW7m2zbde66/AkkjFekLY8ROJyrAsLW6pgALB6atjt75heU48qe0C24alHlp67kftXz7GZDiOPxFCxIZKJojYfMdz7u8weLnh4bXkpf7Twrjq0AG4pQRRog2P17Slrc8Ix6a7UXKdcOkvl+RDnA4lnGttIG4RtO4A6qvl/qM2LmHAYcnD8Hw2O8ZzlXyOxs0i+0YkA9AaHUTU+E4pcmTXmQUxtipANdaPu+c37mXCYmxUQCcYYpTaqbSVUfqSRXunrftfNG9ezFQo5/E+/Yy/EcNw2bGMON1bEgVKFMCVFVZu9u4/eYznPEfwuFTi0NiVtLCunXYN0WtvnZ/XUOXcScXEYRoZHB8WoFSw6bA/8AvSdByjBxCFMjL7M7kA1bavPbv1989SkpvDRdOrgSS3bompelXo9i47B7XCtZ1Xw9iQCfA/mDR37H9jx57DFSKIJBB7EGiD+s75wPDsoU8O9o1AKyksKq7JO4odfn5znnrT9HxhyjiMY8GQ09dFcbf1qbNDc4tVy6djBq64tuUeqNKXeSkMakyemdc5xBxGhjkSZAJ6pEtK1aSZdoBPEd5JmlWE1+0HciASMqrzgrH3ywwSVVARkRgQCBEjcmYoBBoCTqGmARqFyREiqwAuOFRmAKSAijJgCMQMlcQqAICBMLjK3AIyWqVsIoBaYriEkIAhC4wYhAJgwldmEAIqhcVwQbJ6DcEX4j2hQsuPc1XWvedzOn+jy4+JHtGpmRygsHVQsCz2sb11uan6tMSrhfI38+QrfkAAP9zN74nmy8OFtNZcCqABbSK1FhvtY/f5zg6i3dqJZ7ckdvT1vgxjBc2YT0pRsfEN7W9JUHH2A2/KAAd7vy6zI8FkbPwqt4faqpU6tyUVjX6+IdfOe3geOx8VSaQxDUFeiQa6Bu3z3mRGXQxR8PsTpsldDq3b+Xxdu9ShrdlovvuzWqbIc0cy/h3bK5HS6K/I0aHQV1np4/gV8BDqNC6SctUfI1d3sJnub+hy521JkA1WT2r3hepmGz+rvLqpnFDo2x77GvfIUejzj8jLddYpr3fEV9fqY3iMoy5UwoyszUlqSQT1J00AKonYdjOq+jXDLZO17mtq2tdh23JN3NQ5N6I4+HQ5KZmvRrYdGLBdu1Xt75Dm/OcqOyJkbH7La1Ygs1Ak/LfoZ6jJRsjJrKRojG/VV7HJZRkPSbiQvE5faJZDB186KCq/b+k9/o/wAVhzEYs+PSRRAbob6EHtf/AF5zFc0y8Jl4dMmtnzOtOxLkkURZuh2AoUNzPH6McAxfIC5yBgAC5PTyIO9fKVTcVY5de+PXsZNLthGdM3h9UdN48YcWNiQqALsQACD7vM+6cl5nxD8XjzYVxl9atkv+RHXxAo/Q+IUR7+0z+PFwntz7YglSUCbshFVR8xfYnb3TL82zhPZr7M6apdK+FN7CEDYbf7TVZdxMTSxgtqplXmElnd8f2PnbG9y8oR1Ev53hGPi8yBSo9oSAdqDeKvkLlGqzU70Jbop/E48o7W0Fzz5J6gtSnIsk8kEAMm8pYVLcfSAJdpO7G+8kqfKPTcAqEkDHo7wMEkRGZFXk5JBUZHTLGkSZBIt+kkRIUZOoBGogstqQaCCJEkRFIwSABjMVwG8AcDJytoAqkhBmhjgAyRaal8iYBSDAmWHHIGAA+cNMZMLgC9nHFqMcAraIxgwgg6R6t+IA4PMepVn8O5sFFPQfOZjheGyZymtmKJq0i96ZrI19/wDitpqHq04hly5lDVeMEDuSD299f7Tono6MiJeMI6qaUZQQb6swPYHrW43nz+pgveJJvB1FGyeni4SxgxGDihw7uMyjGHI8Q/lIPh3/AOZt3o8Bxbs2bqo8JWha6qBFEjfrfv7TUvSHlrs4z5iXLk6kFeEfygKvQUD+0ynofwbjGSrMltaAGmGwFk9KvsZVHbGSzzRatPONbk55fb4+htvPuWKOHyFGYaF1A6q/LvQPUdJqvAc7cKay6vMZDqPX37ieXnvP+I1/w5yHMwNsmlQOtgMVA1dRNZHMfGwdQji7H9bHy6V/3LbZRbzXHCMOs0moqrV2fl8OzNo5nzrNly4FYouFHOTKBerJpFoNwRs2lt6HhEr4/lYy5Pa60VXJZl/MeooaqryEwGPmKuaDix27zpvojk4XiOGCHQXUVkU0GB62PdVGxK4Rsvlszjl3Gh1zgnuXPyF6NchwvhJcB7tOlBRtdeR26yvkPKU4bicqKzOjKBZF09k6NQ60JjcvF48BY4soA9rpVVfQGUEjdQRq37iZDgOdeyZRoDdSVQ7ixZoNQNb995ZCyqOyDjhrqy+6iUpOx/l2NY5ryTOmYppYK+QlWAoEE6je3WrHWbf7RCqq4VbNlQ47dN63vaR470z4HKjYRmHtGBAR1ZWB/wAxVgKA6zE5LOJVSs4YAb0GN7llIqiNj26dZ7sqVb8LyjZ7xPURXEWGjlHrMxaOYGgArY0Za8rYDfuaA39814ZZkPTzG68c6tkL0qBWJvw6bH9bmIAnW0/+KPoca/HElg9uoSqrkFO0tLADaXlRU6yJapIvEAIBYjSz2t7SoCDVALCSZAyPeI3AEo3lsiRAGCRkyNRkxXAHqjMjvFqggsVpApGIjAK2gBJExGCQURmQUx3ADVHUiI4AmWSUyNwgEwY2baViBMAmGgVkFluqARIkCKlxO0qIgEQLjkY4BWDGI6i8RbSqMT5AEn9pGcBRb6Hv5DzH+G4nFmqwj+If6Ts39CT+k+g+TcV7XEDjbHgVjRfJp1nyAQN3HmR7rnzNxWpTTKVPkwIP9Zvfq19Itxw2UKwHiUtv4VI2HvFmvd8ph1kVjipZx+hq06blw28HRuf5RgIU6c7MzKWy/kNVZ9mDp71XuM8PL+bNfi0hVcCkHhJJA89qPeR5zwxzMVH9mitaBtKqRS04q9rLdffLPRDk2LJnVTlLBfHo23IPRvIXRnHlFWNRj3N+rtjXTGCfibMdz7E+HOzgXqYNe4slQSlj3zH8Ny1uJzgEaPzPqAoCh036X8p0j0sy4MLYyQt+I0e/cbH33098xXBY/bOuTEtpsDRHXV1IPuBXp+1S2cZQk4GuOolZQnKPLGMmt8Z6H8Uql1xh6F2NA2A3Omhfn2nq4DkaNj8bI5calo7girvbyozdeY89bQE0DEzCrYrRux4KO5+fSxMdznl//hnLi/vMdOg/zUbOHSP8wtfnUi6EcqMH6mGpqK3OCj6LqaL6QYGxNkXTq1gBG66R4dv0o7dP3M9nDcR7EYgXo2CzHfc9SffNp5ymDiceHJjUoTvuKP8AqDA1RB2o73tNJ5oEObSj61xg6roAtTDQN+o7+Uqdbk9vwK7Z3avUwjzwsf8ATbeI5Zw/FIwzYAzebLTkVdg9R1HkdpqfMOQcVhe+A4lwo305jqx/lsqMxOoAVWkk9esz2N2fgsYe9I2tT/hi92odANu81f005uOH4Y4MeUuch04yppQlD2j/ADJJHzszTXubUI8/Xp9+ZtujCEZSb5+X39DQOZcxycTmfNkChjQpfyjSAu25228+8XaU8Niqep0ndjFRSS6HAbbeWVkwvYyQWQIqeiAUd4hY6RrC4A1a4RyLQC1TGZSGktUAbfOR1QLSLQSWXI6pGNoAw0DFUKgEli1SNSOmATuImBEIAXETGBI3AJERhR3iEcAZEREN5JGgEGWCiWOZCAIwMWqOoAExiRjAgAYQAjgGb9EsOM5NTjURVD59T89us2scwxe2Z1xjStUrtdgAA2dr3NznfCs+oBDudpkuZ8DlwIre0Ri9sQLte1N8/nOZqad1mXLr0PpPZmpjDT4UHyznH3/B7+f+y4hwoAW22071v0BMx/N/RvJwj68TkMniu1Ne8EbGYzlnGFcgdqY2QNQ2uun/ADMu3t+IDpiTURf5QSPnYHQSVGdeIp8voepW6bVpylHxduueXR/ybt6G89Ti0ALXmUeNSLrzOMGwFJAJnv4HDmw50bG7IrFkZwq2Wq1DAggDY+U4yjZuFyggtjyKbVlNEH3H/idI5D6xlfH7LiwFb/ONlbyBA/Kfedpnu0Ti+JU8r4f6OYroykoXx8S+P7myekHi9mVcnKXZdyW1MVBu62oL07VNg9G3bgcV5gGDGyo6g0FBF+e01flebCS2VHHiJ0WwYAkaWbw7+Q/Q7zJ81VM2EBc+krpI3Oil1eEDdr33Y+QmSM2nlcn5m/Uym6OHHoV+k+TLncvXh0kkLuFSx1rfq2/zlXJOOz5M2NV/In5nK2Aq9RqI60Ovvmb5ZxPDIrYOHLZMuQf2jZBRA7r4hRvpQ27yrPncoBqZGQkmqW+x8N2QfMeUSqaxJvLOdRVbakrJNY7C43mmM5snDONLjGMmM7kMu/bpakb9fzLMNm5LjV1sgBtTg6qsAX02rcruZivTTiDjTBmxBS+IaslOviR7Vse7XZXfp5TF8f6WYMHiwqr5SgAoDQNS9WNeX8o3vr5y5VSljYvvzN0bYUqWZY/c2HnXFJwmJ8mfLpJXRjxKbZxV6CepFndjORcTxL5nORzbH9gOyjyAhxvGZM7nJlcu57ny8gOw90FWdXTaZUrL5s5Go1MrX5F2Iz0qJ5MfWepcle/3TUZiQTylTYrnowkV75Bj3kgjixg9pVkSjLNZ7St1JkAiGkdooBYJCow0QEDAAxRgR3AEIBYmO8dwAEeqRIMSiASJhGBHcAQjMLjJgEDACPTAwBNFJHpC4AAwNRgyEAkDBjIXC4A63jBjjEABUTGSuRMAUJIwgBgfSQw7T28Vx7ZiqhReygVQ+fXrNx/Bzmfw31X+3LOE9UHM0cN/423/ANr/AG5TbWpeLHNGzS6mUP7Tfgk+ZqmfkL4sYc5cb6uuJbJXvqWxWoV2M9vAcxPC4CmN6JNWLGrTVGwd9yRV7VNu471VcwZmZDhAbcqchqyN+iTy8P6leLCeLJju70hzpN9SGrwtXuPSZeHOS8f6G9XV0ybqwuz5/JrzNPycvPG5ACQlbs3bcX+Y9b2NzGekvo43C14wwIDbMrbHobXbt0nReF9UXMEVk1YGU7gnI2oddvyd+l+XaPnXqp5lm2X+HUbdcrE7eZ9nuZ7hGyMkl+E82Xaa2qTmvFjr3z9/M5TwhNXZHvG0yfB834jD/dZnX9dQ/ZgRN2x+prmQFf8AjfVf7cl+DfMvhvqv9ua3GMuqOOpSXRmp4fTHjkYMOIY10BVK3+Sjznl5h6RcTmJL5TuKobCruh3r9ZujeprmXw31X+3I/gxzL4b6r/bnjg15ztXyPXFsxjc/mc6dix1MSx82JY/ud4aJ0j8GuZfDfVb7ciPU3zP4b6r/AG5aVnPMaywzoH4Ocz+G+q/24/wc5n8L9V/twDQUWBJnQcfqe5kOv8N9VvtyR9T/ADL4b6rfbgHPVNSQab8fU9zLt/DfVf7cB6nuZfDfVf7cA0JYy83/APCDmXw31W+3IN6n+Zn/AON9Z/twDnzyM6B+DvM/PhvrP9uI+pzmfwv1X+3BJoJPlIkToP4Ocz+F+q/24fg7zP4b6r/bgHPhJCdA/B7mfwv1X+3Aep7mfwv1n+3AOfMIXOgfg7zP4b6r/bjHqd5n8N9Z/twDn5iBqdBPqe5n8N9Z/tRfg5zP4b6z/bgHPhHU6Evqd5l8N9V/tw/B7mXw31n+3AOe0YwZ0L8HeZefDfVb7cX4O8y+G+s/24Bz9jI1Ogn1O8z+G+s/24x6nuZ/DfVb7cA57UJ0FvU9zP4b6r/biPqd5n8L9V/twDnwMkJvw9TfM/hvqv8Abkh6nuZ/DfWf7cA58Vhc6CfU7zP4b6z/AGoh6nOZ/DfVf7cA59Fc6D+DfM/hvrP9uL8G+Z/C/Vf7cA0C4ToH4N8z8+G+q/24/wAHeZ/C/Vf7cA5+D5wnQfwe5n8L9Z/twgH0JCEJACEIQAhCEAIQhACEIQAhCEAIQhACEIQAkMq2pANEgix2sdYQgGOTluQWRnOo9SQxB2QAkauvhbfvq90gvKXDWM7DxWd23GrI1bsQP7wdv5BHCASfljmv7ZtlUdWPiB3f83eztv27CjF+V5CpHt2vw0fEaK5dfdjdils77bERwgFnE8Dka6zFbAArVtV+Tj3Hzsda2lnD8Eyvq9qxBLHSSSN2Y0ATQq0Gw/l95hCALLwLFAvtCxGUZNWQAkAZNekadNUPCD1rrffznlB1Kda+FsrAaDVZG1URq+YPnfaEIBU3ISQB7U7KVrT4a9qmSqu68JU77hvdUtblBPXIP7xHsLRtUVW2urOm7A2uOEAXCcnZDjJyk+zYmtIAa8ZU33LEnUSflMtCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEA//Z" />
      </Route>
      <Route exact path='/pizza'>
        <OrderForm />
      </Route>
    </div>
  );
};
export default App;